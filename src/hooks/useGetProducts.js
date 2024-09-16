import { useQuery } from "@tanstack/react-query";
import { apiGetproducts } from "../services/apiGetProducts";
import { useSearchParams } from "react-router-dom";
import { apiGetFilteredProducts } from "../services/apiGetFilteredProducts";
import { useMemo } from "react";

export function useGetProducts() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const filter = searchParams.get("filter");

  // Assign query function based on category and filter
  const queryFn = useMemo(() => {
    if (category === "all" || !category) {
      return apiGetproducts; // Fetch all products
    } else {
      return () => apiGetFilteredProducts({ category }); // Fetch filtered products
    }
  }, [category]);

  const {
    isLoading: gettingProducts,
    error,
    data: productsData, // Renamed to distinguish from the final `products`
  } = useQuery({
    queryKey: ["products", category, filter, sort],
    queryFn,
  });

  const products = useMemo(() => {
    if (!productsData?.products) return [];

    let filteredProducts = [...productsData.products];

    // Apply filter only when necessary
    if (filter === "discount") {
      filteredProducts = filteredProducts.filter((product) => product.discount);
    }

    // Apply sorting only if necessary
    switch (sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-dec":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rate-asc":
        filteredProducts.sort((a, b) => a.rating - b.rating);
        break;
      case "rate-dec":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filteredProducts;
  }, [productsData, filter, sort]);

  return { gettingProducts, error, products };
}

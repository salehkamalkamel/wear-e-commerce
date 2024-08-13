import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

function useProductData() {
  const { products } = useProductContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const sort = queryParams.get("sort");
  const filter = queryParams.get("filter");
  const category = queryParams.get("category");

  const finalProducts = useMemo(() => {
    let filteredProducts = [...products];

    if (category && category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === category
      );
    }

    // Handle filtering
    if (filter === "discount") {
      filteredProducts = filteredProducts.filter((product) => product.discount);
    }
    // If filter is "all" or not set, do not apply any filter
    // Otherwise, filteredProducts will already be assigned correctly.

    // Handle sorting
    if (sort) {
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
        default:
          break;
      }
    }

    return filteredProducts;
  }, [sort, filter, category, products]);

  return finalProducts;
}

export default useProductData;

import { useState } from "react";
import ProductsHero from "./ProductsHero";
import ProductsControl from "./ProductsControl";
import ProductsList from "./ProductsList";
import ScrollUpBtn from "../../ui/ScrollUpBtn";
import { useGetProducts } from "../../hooks/useGetProducts";
import ErrorPage from "../../ui/ErrorPage"; // Assuming you have an error page component

export default function ProductsLayout() {
  const [page, setPage] = useState(1);
  const { gettingProducts, error, products } = useGetProducts();

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    // Handle logic for fetching more products based on `page` if applicable
  };

  if (error) {
    return <ErrorPage message={error.message} />; // Show a proper error message
  }

  // No need to mutate products directly
  const productList = products?.length > 0 ? products : [];

  return (
    <>
      <ProductsHero />
      <ProductsControl products={productList} />
      <ProductsList
        page={page}
        onLoad={handleLoadMore}
        gettingProducts={gettingProducts}
        error={error}
        products={productList}
      />
      <ScrollUpBtn />
    </>
  );
}

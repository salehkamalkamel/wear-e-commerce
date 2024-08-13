import { useState } from "react";
import useProductData from "../../hooks/useProductData";
import ProductsHero from "./ProductsHero";
import ProductsControl from "./ProductsControl";
import ProductsList from "./ProductsList";
import ScrollUpBtn from "../../ui/ScrollUpBtn";

export default function ProductsLayout() {
  const [page, setPage] = useState(1);
  const finalProducts = useProductData();

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ProductsHero />
      <ProductsControl finalProducts={finalProducts} />
      <ProductsList
        page={page}
        onLoad={handleLoadMore}
        finalProducts={finalProducts}
      />
      <ScrollUpBtn />
    </>
  );
}

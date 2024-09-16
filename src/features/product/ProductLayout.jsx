import { useParams } from "react-router-dom";
import { useGetProduct } from "../../hooks/useGetProduct";
import Container from "../../ui/Container";
import ProductShow from "./ProductShow";
import ProductShowSkeleton from "./ProductShowSkeleton";
import ForYou from "./ForYou";
import Similar from "./Similar";

export default function ProductLayout() {
  const { productId } = useParams();
  let { product, isLoading, error } = useGetProduct(productId);

  if (isLoading) {
    return (
      <Container>
        <ProductShowSkeleton />
      </Container>
    );
  }

  if (error) {
    console.log(error);
    return (
      <Container>
        <p className="text-center text-red-500">Product not found</p>
      </Container>
    );
  }

  return (
    <>
      <ProductShow product={product.data[0]} />
      <ForYou product={product} />
      <Similar product={product} />
    </>
  );
}

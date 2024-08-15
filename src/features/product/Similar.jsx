import { useParams } from "react-router-dom";
import Carousel from "../../ui/Carousel";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import ProductCard from "./ProductCard";
import { useProductContext } from "../../contexts/ProductContext";

export default function Similar() {
  const { productId } = useParams();
  const { products } = useProductContext();
  const productType = products.find(
    (product) => product.id === parseInt(productId, 10)
  )?.type;
  const similer = products.filter((product) => product.type === productType);
  return (
    <section className="py-16 border-t border-b border-gray-200">
      <Container>
        <div className="flex flex-col items-center w-full">
          <Heading as="h4" className="text-3xl font-bold text-gray-900 mb-2">
            Similar Products
          </Heading>
          <Heading as="h5" className="text-lg font-semibold text-gray-600 mb-6">
            Products similar to this one
          </Heading>
          <Carousel>
            {similer.map((product) => (
              <ProductCard size="md" product={product} key={product.id} />
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

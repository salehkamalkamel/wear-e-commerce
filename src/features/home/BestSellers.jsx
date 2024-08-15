import Carousel from "../../ui/Carousel";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import productsData from "../products/data-products";
import ProductCard from "../product/ProductCard";

export default function BestSeller() {
  const bestSeller = productsData.filter((product) => product.rating > 4.5);

  return (
    <section className="py-16 border-b border-gray-200">
      <Container>
        <div className="flex flex-col items-center justify-center w-full">
          <Heading as="h4" className="text-3xl font-bold text-gray-900 mb-2">
            Our Best Sellers
          </Heading>
          <Heading as="h5" className="text-lg font-semibold text-gray-600 mb-6">
            Discover a list of loved products
          </Heading>
          <Carousel>
            {bestSeller.map((product) => (
              <ProductCard size="md" product={product} key={product.id} />
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

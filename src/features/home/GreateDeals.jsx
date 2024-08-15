import Carousel from "../../ui/Carousel";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import ProductCard from "../product/ProductCard";
import productsData from "../products/data-products";

export default function GreateDeals() {
  const offerProducts = productsData.filter((product) => product.discount);

  return (
    <section className="py-16 border-b border-gray-200">
      <Container>
        <div className="flex flex-col items-center justify-center w-full">
          <Heading as="h4" className="text-3xl font-bold text-gray-900 mb-2">
            Great Deals
          </Heading>
          <Heading as="h5" className="text-lg font-semibold text-gray-600 mb-6">
            Arrived at the right time for great deals
          </Heading>
          <Carousel>
            {offerProducts.map((product) => (
              <ProductCard size="md" product={product} key={product.id} />
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

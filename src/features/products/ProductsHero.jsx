import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import SlideCarousel from "../../ui/SlideCarousel";

export default function ProductsHero() {
  return (
    <section className="bg-gray-100 py-16 border-b border-gray-300">
      <Container className="px-8">
        <div className="flex flex-col gap-12">
          <Heading
            as="h4"
            className="text-3xl md:text-4xl font-semibold text-gray-900"
          >
            Welcome to Our Store
            <span className="block text-gray-600 mt-2 text-xl">
              Discover a curated collection of top-quality products.
            </span>
          </Heading>
          <SlideCarousel className="mx-auto" />
        </div>
      </Container>
    </section>
  );
}

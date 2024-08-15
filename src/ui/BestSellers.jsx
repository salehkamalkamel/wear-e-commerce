import Carousel from "./Carousel";
import Container from "./Container";
import Heading from "./Heading";

export default function BestSellers() {
  return (
    <section className="py-16 border-b border-gray-200">
      <Container>
        <div className="flex flex-col items-start">
          <Heading
            as="h4"
            className="text-3xl font-bold text-gray-900 text-center"
          >
            Our Best sellers
          </Heading>
          <Heading as="h5" className="text-lg font-semibold text-gray-600">
            Discover list of loved products{" "}
          </Heading>
          <Carousel />
        </div>
      </Container>
    </section>
  );
}

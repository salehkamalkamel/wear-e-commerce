import { useNavigate } from "react-router-dom";
import AutoCarousel from "../../ui/AutoCarousel";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="py-16 border-b border-gray-200">
      <Container className="px-4 md:px-12">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Heading
            as="h3"
            className="text-3xl md:text-5xl font-bold text-gray-900 text-center md:text-left"
            aria-label="Hero heading"
          >
            <span className="block text-lg md:text-xl font-medium text-gray-700">
              Discover a World of
            </span>
            Premium Fashion
          </Heading>
          <Button
            className="bg-primary text-white hover:bg-primary-dark"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </Button>
        </div>
        <div className="mt-12">
          <AutoCarousel auto={true} />
        </div>
      </Container>
    </section>
  );
}

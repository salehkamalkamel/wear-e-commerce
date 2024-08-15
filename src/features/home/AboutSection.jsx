import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <Container className="text-center">
        <div className="flex flex-col gap-8 items-center">
          <Heading as="h5" className="text-lg font-semibold text-gray-600">
            Who We Are
          </Heading>
          <Heading as="h4" className="text-3xl font-bold text-gray-900">
            Your Destination for Quality Clothing
          </Heading>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            {`  At our store, we offer a curated selection of high-quality
              clothing designed to make you look and feel great. Our commitment
              to quality and style ensures that you'll find the perfect fit for
              every occasion.`}
          </p>
          <Button type="secondary" onClick={() => navigate("/about")}>
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
}

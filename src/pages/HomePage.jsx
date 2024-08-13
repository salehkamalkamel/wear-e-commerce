import { useNavigate } from "react-router-dom";
import Card from "../features/home/Card";
import AutoCarousel from "../ui/AutoCarousel";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 border-b border-gray-200">
        <Container className="px-12">
          <div className="flex flex-col gap-8 items-center justify-center md:items-start md:justify-start">
            <Heading
              as="h3"
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="text-lg md:text-xl font-medium text-gray-700 block">
                Discover a World of
              </span>
              Premium Fashion
            </Heading>
            <Button
              className="w-fit bg-primary text-white hover:bg-primary-dark"
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

      {/* Categories Section */}
      <section className="py-16 border-b border-gray-200">
        <Container className="px-12">
          <div className="flex flex-wrap gap-6 justify-center">
            <Card
              title="Men's Fashion"
              description="Explore our latest collection of men's clothing and accessories."
              buttonText="Explore"
              onClick={() => navigate("/products?category=mens")}
            />
            <Card
              title="Women's Fashion"
              description="Discover stylish and trendy women's wear for every occasion."
              buttonText="Explore"
              onClick={() => navigate("/products?category=womans")}
            />
            <Card
              title="Kids' Fashion"
              description="Find adorable and comfortable outfits for your little ones."
              buttonText="Explore"
              onClick={() => navigate("/products?category=kids")}
            />
          </div>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <Container className="flex flex-col items-center">
          <div className="w-full flex flex-col gap-8 items-center">
            <Heading as="h5" className="text-lg font-semibold text-gray-600">
              Who We Are
            </Heading>
            <Heading
              as="h4"
              className="text-3xl font-bold text-gray-900 text-center"
            >
              Your Destination for Quality Clothing
            </Heading>
            <p className="text-lg text-gray-600 text-center max-w-lg">
              {` At our store, we offer a curated selection of high-quality
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
    </>
  );
}

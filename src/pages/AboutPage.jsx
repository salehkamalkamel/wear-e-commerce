import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 border-b border-gray-300">
        <Container>
          <div className="flex flex-col gap-12 text-center">
            <Heading as="h1">About Us</Heading>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 w-[50%]">
              We are a dynamic clothing startup dedicated to delivering
              high-quality and stylish apparel. Our mission is to offer
              exceptional products and outstanding service, making fashion
              accessible and enjoyable for everyone.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-20 border-b border-gray-300">
        <Container className="flex flex-col lg:flex-row items-center gap-12 md:text-start text-center px-4 md:px-8">
          <div className="lg:w-1/2">
            <Heading
              as="h2"
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
            >
              Our Story
            </Heading>
            <p className="text-lg text-gray-700 leading-relaxed">
              {` Founded with a passion for fashion and a commitment to quality,
              our company started as a small venture with a vision to redefine
              the shopping experience. We source our products from trusted
              suppliers and ensure that every item meets our high standards. Our
              team works tirelessly to bring you the latest trends and timeless
              pieces that you'll love.`}
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/about-image.jpg"
              alt="Our Story"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-300">
        <Container className="px-4 md:px-8">
          <Heading
            as="h2"
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8"
          >
            Our Values
          </Heading>
          <ul className=" pl-6 md:pl-12 space-y-4 text-lg text-gray-700 mx-auto max-w-2xl">
            <li>
              <strong>Quality:</strong> We ensure that every product meets our
              high standards for durability and style.
            </li>
            <li>
              <strong>Customer Focus:</strong> Our customers are at the heart of
              everything we do. We strive to provide excellent service and
              support.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to reducing our
              environmental impact through responsible sourcing and practices.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace creativity and continually
              seek new ways to improve our offerings and customer experience.
            </li>
          </ul>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <Container className="px-4 md:px-8">
          <div className="w-full flex flex-col gap-4 md:text-start text-center">
            <Heading as="h3" className="w-full">
              Join Us on Our Journey
            </Heading>
            <p className="text-lg md:text-xl text-gray-700 mb-8 ">
              We invite you to be a part of our growing community. Follow us on
              social media, subscribe to our newsletter, and stay updated with
              our latest collections and offers.
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <Button
              type="primary"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

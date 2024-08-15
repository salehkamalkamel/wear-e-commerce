import { useNavigate } from "react-router-dom";
import Container from "../../ui/Container";
import Card from "./Card";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="py-16 border-b border-gray-200">
      <Container className="px-4 md:px-12">
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
  );
}

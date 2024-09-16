import Hero from "../features/home/Hero";
import Categories from "../features/home/Categories";
import AboutSection from "../features/home/AboutSection";
import ProductsBreif from "../ui/ProductsBrief";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsBreif
        title="Our Best Sellers"
        subtitle="Discover a list of loved products"
        filter={{ rating: 4.5 }}
      />
      <ProductsBreif
        title="Great Deals"
        subtitle="Arrived at the right time for great deals"
        filter={{ discount: true }}
      />
      <Categories />
      <AboutSection />
    </>
  );
}

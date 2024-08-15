import Hero from "../features/home/Hero";
import BestSeller from "../features/home/BestSellers";
import GreateDeals from "../features/home/GreateDeals";
import Categories from "../features/home/Categories";
import AboutSection from "../features/home/AboutSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSeller />
      <GreateDeals />
      <Categories />
      <AboutSection />
    </>
  );
}

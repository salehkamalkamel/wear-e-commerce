import Container from "../../ui/Container";
import OptionsMenu from "../../ui/OptionsMenu";

export default function ProductsControl({ finalProducts }) {
  return (
    <section className="bg-white py-8 border-b border-gray-300">
      <Container className="px-8 flex flex-col gap-4 md:flex-row md:justify-between items-center">
        <p className="text-gray-800 font-medium">
          {finalProducts.length}{" "}
          {finalProducts.length === 1 ? "Result" : "Results"}
        </p>
        <div className="flex gap-4 items-center">
          <OptionsMenu
            options={[
              { title: "Price: Low to High", value: "price-asc" },
              { title: "Price: High to Low", value: "price-dec" },
              { title: "Rating: Low to High", value: "rate-asc" },
              { title: "Rating: High to Low", value: "rate-dec" },
            ]}
            title="Sort"
          />
          <OptionsMenu
            title="Filter"
            options={[
              { title: "All Products", value: "all" },
              { title: "On Sale", value: "discount" },
            ]}
          />
          <OptionsMenu
            className="block sm:hidden"
            title="Category"
            options={[
              { title: "All", value: "all" },
              { title: "Mens", value: "mens" },
              { title: "Womans", value: "womans" },
              { title: "Kids", value: "kids" },
              { title: "Sport", value: "sport" },
              { title: "Casual", value: "casual" },
              { title: "Classic", value: "classic" },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

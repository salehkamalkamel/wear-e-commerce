import ProductsBreif from "../../ui/ProductsBrief";

export default function ForYou({ product }) {
  return (
    <ProductsBreif
      title="Recommended For You"
      subtitle="Products you might like"
      filter={{ category: product.data[0].category }}
    />
  );
}

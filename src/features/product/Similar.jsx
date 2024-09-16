import ProductsBreif from "../../ui/ProductsBrief";

export default function Similar({ product }) {
  return (
    <ProductsBreif
      title="Similar Products"
      subtitle="Products similar to this one"
      filter={{ type: product.data[0].type }}
    />
  );
}

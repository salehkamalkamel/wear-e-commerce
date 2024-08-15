import ForYou from "../features/product/ForYou";
import ProductShow from "../features/product/ProductShow";
import Similar from "../features/product/Similar";

export default function ProductPage() {
  return (
    <div>
      <ProductShow />
      <ForYou />
      <Similar />
    </div>
  );
}

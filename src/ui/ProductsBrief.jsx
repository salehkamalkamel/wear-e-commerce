import Carousel from "./Carousel";
import Container from "./Container";
import Heading from "./Heading";
import ProductCard from "../features/product/ProductCard";
import { useBestSellers } from "../hooks/useFilteredProducts";
import ProductCardSkeleton from "../features/product/ProductCardSkeleton";

export default function ProductsBreif({
  title,
  subtitle,
  filter,
  skeletonCount = 10,
}) {
  const { data, isLoading, error } = useBestSellers(filter);
  let products = [];

  if (isLoading) {
    // Render skeletons when loading
    products = Array.from({ length: skeletonCount });
  } else if (data.products) {
    // Assign products only if data is available
    products = data.products;
  }

  if (error || !products.length) {
    // Properly handle the error
    return (
      <section className="py-16 border-b border-gray-200">
        <Container>
          <div className="text-red-500 text-center">
            Error loading data. Please try again later.
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 border-b border-gray-200">
      <Container>
        <div className="flex flex-col items-center justify-center w-full">
          <Heading as="h4" className="text-3xl font-bold text-primary mb-2">
            {title}
          </Heading>
          <Heading as="h5" className="text-lg font-semibold text-gray-600 mb-6">
            {subtitle}
          </Heading>
          <Carousel>
            <div className="w-max flex gap-4">
              {products.map((product, idx) =>
                product ? (
                  <ProductCard size="md" product={product} key={product.id} />
                ) : (
                  <ProductCardSkeleton size="md" key={idx} />
                )
              )}
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

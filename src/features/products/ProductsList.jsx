import ShowMore from "./ShowMore";
import Container from "../../ui/Container";
import Empty from "../../ui/Empty";
import ProductCard from "../product/ProductCard";
import ProductCardSkeleton from "../product/ProductCardSkeleton";

const ITEMS_PER_PAGE = 10;

export default function ProductsList({
  page,
  onLoad,
  gettingProducts,
  error,
  products,
}) {
  // Handle errors
  if (error) {
    return (
      <Container>
        <div className="text-red-500">
          Error loading products: {error.message}
        </div>
      </Container>
    );
  }

  // Handle loading state
  if (gettingProducts) {
    return (
      <section className="bg-gray-50 py-8">
        <Container className="px-8">
          <div className="flex flex-wrap gap-6 justify-center">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  // Ensure the products structure is valid
  const productList = products ?? [];
  const paginatedProducts = productList.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = productList.length > paginatedProducts.length;

  return (
    <section className="bg-gray-50 py-8">
      <Container className="px-8">
        <div className="flex flex-col items-center gap-12">
          {paginatedProducts.length > 0 ? (
            <ul className="w-full flex flex-wrap gap-6 justify-center">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          ) : (
            <Empty resource="Products" />
          )}

          {hasMore && (
            <ShowMore
              onLoadMore={onLoad}
              hasMore={hasMore}
              displayedItems={paginatedProducts.length}
              totalItems={productList.length}
            />
          )}
        </div>
      </Container>
    </section>
  );
}

import ShowMore from "./ShowMore";
import Container from "../../ui/Container";
import Empty from "../../ui/Empty";
import ProductCard from "../product/ProductCard";

const ITEMS_PER_PAGE = 10;

export default function ProductsList({ page, onLoad, finalProducts }) {
  // Paginate products
  const paginatedProducts = finalProducts.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = finalProducts.length > paginatedProducts.length;
  return (
    <section className="bg-gray-50 py-8">
      <Container className="px-8">
        <div className="flex flex-col items-center gap-12">
          <ul className="w-full flex flex-wrap gap-6 justify-center">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <Empty resource="Products" />
            )}
          </ul>
          <ShowMore
            onLoadMore={onLoad}
            hasMore={hasMore}
            displayedItems={paginatedProducts.length}
            totalItems={finalProducts.length}
          />
        </div>
      </Container>
    </section>
  );
}

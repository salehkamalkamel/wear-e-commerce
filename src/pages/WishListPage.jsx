import { RxCross2 } from "react-icons/rx";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import { useWishListContext } from "../contexts/WishListContext";
import WishListItem from "../ui/WishListItem";
import Empty from "../ui/Empty";

export default function WishListPage() {
  const { clearWishList, wishListData } = useWishListContext();

  return (
    <Container className="px-4 sm:px-8 lg:px-12 py-8">
      <div className="bg-white rounded-xl border border-custom-black-10 shadow-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Heading as="h6" className="text-lg">
                Wish List
              </Heading>
              <span className="text-sm text-custom-black-60">
                {`(${wishListData.length} ${
                  wishListData.length === 1 ? "item" : "items"
                })`}
              </span>
            </div>
            <button
              className="text-sm text-custom-red font-semibold flex items-center gap-2"
              onClick={clearWishList}
            >
              <RxCross2 className="text-xl" />
              Clear List
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr]  sm:grid-cols-[2fr_1fr_1fr_1fr] font-semibold text-sm mb-4 border-b pb-2">
            <div className="text-center">Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Visit</div>
            <div className="text-center"></div>
          </div>

          {/* Wish List Items */}
          <div className="flex flex-col gap-6">
            {wishListData.length > 0 ? (
              wishListData.map((product, index) => (
                <WishListItem key={index} item={product} />
              ))
            ) : (
              <Empty resource="Wish List Items" />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

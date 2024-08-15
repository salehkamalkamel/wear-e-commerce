import { RxCross2 } from "react-icons/rx";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import CartItem from "../ui/CartItem";
import { useCartContext } from "../utils/cartUtils";
import Empty from "../ui/Empty";
import { useProductContext } from "../contexts/ProductContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cartData, clearAll } = useCartContext() || {};
  const { addProduct } = useProductContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartData) {
      const totalAmount = cartData.reduce(
        (acc, item) => acc + item.product.price * item.count,
        0
      );
      setTotal(Math.ceil(totalAmount));
    }
  }, [cartData]);

  function handleClearAll() {
    cartData.forEach((item) => {
      addProduct(item.product.id, item.count);
    });
    clearAll();
    toast.success("Your cart has been cleared");
  }

  function totalPrice(price, tax) {
    return Math.ceil(price + price * tax);
  }

  return (
    <div>
      <Container className="px-4 sm:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          {/* Cart Items Section */}
          <div className="rounded-xl border border-custom-black-10 p-6 bg-white shadow-lg flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Heading as="h6" className="text-lg">
                  Cart
                </Heading>
                <span className="text-sm text-custom-black-60">
                  {`${cartData ? cartData.length : 0} items`}
                </span>
              </div>
              <button
                className="text-sm text-custom-red font-bold flex items-center gap-2"
                onClick={handleClearAll}
              >
                <RxCross2 className="text-xl" />
                Clear cart
              </button>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] font-semibold text-sm mb-4 border-b pb-2">
              <div className="text-center">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Count</div>
              <div className="text-center"></div>
            </div>

            {/* Cart Items */}
            <div className="flex flex-col gap-6">
              {cartData.length > 0 ? (
                cartData.map((product, index) => (
                  <CartItem
                    key={index}
                    item={product.product}
                    count={product.count}
                  />
                ))
              ) : (
                <Empty resource="Cart Items" />
              )}
            </div>
          </div>

          {/* Promo Code & Summary Section */}
          <div className="bg-custom-black-10 rounded-xl p-6 sticky top-8">
            <p className="font-semibold text-lg mb-4">Promo Code</p>
            <div className="flex items-center border border-custom-black-20 rounded-full bg-white p-1 mb-6">
              <input
                className="bg-transparent flex-1 px-4 py-2 outline-none "
                placeholder="Enter your promo code"
              />
              <button className="bg-primary text-white rounded-full py-2 px-4 text-sm">
                Apply
              </button>
            </div>
            <div className="flex flex-col gap-4 border-t border-custom-black-20 pt-4">
              <div className="flex justify-between text-sm text-custom-black-60">
                <p>Subtotal</p>
                <p>EGP{total}</p>
              </div>
              <div className="flex justify-between text-sm text-custom-black-60">
                <p>Taxes</p>
                <p>EGP{Math.ceil(total * 0.125)}</p>
              </div>
              <div className="flex justify-between font-semibold text-lg text-custom-black-100">
                <p>Total</p>
                <p>EGP{totalPrice(total, 0.125)}</p>
              </div>
            </div>
            <button className="bg-primary text-white rounded-lg px-8 py-4 mt-6 w-full font-bold">
              Check Out
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

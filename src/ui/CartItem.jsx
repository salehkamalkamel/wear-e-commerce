// src/ui/CartItem.js
import { RxCross2 } from "react-icons/rx";
import IconButton from "./IconButton";
import { useCartContext } from "../utils/cartUtils";
import { useProductContext } from "../contexts/ProductContext";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CartItem({ item, count }) {
  const [amount, setAmount] = useState(count);
  const { images, title, price, id, quantity } = item;
  const { remove, add, decrease } = useCartContext();
  const { addProduct, removeProduct } = useProductContext();

  function handleDelete() {
    remove(id);
    addProduct(id, count);
    toast.success("Product deleted successfully");
  }

  function handleInc() {
    if (amount < quantity) {
      setAmount((prev) => prev + 1);
      removeProduct(id, 1);
      add(item, 1);
    }
  }

  function handleDec() {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
      addProduct(id, 1);
      decrease(id, 1);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 p-4 border border-gray-300 rounded-lg bg-white">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-20 h-20">
          <img
            src={images[0]}
            alt={`Image of ${title}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <p className="text-lg font-semibold text-gray-900">{title}</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-900">${price}</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <IconButton size="sm" onClick={handleDec}>
          <IoIosArrowDown />
        </IconButton>
        <p className="font-bold text-gray-700">{amount}</p>
        <IconButton size="sm" onClick={handleInc}>
          <IoIosArrowUp />
        </IconButton>
      </div>
      <div className="flex items-center justify-center">
        <IconButton
          type="delete"
          size="sm"
          aria-label={`Remove ${title} from cart`}
          onClick={handleDelete}
        >
          <RxCross2 />
        </IconButton>
      </div>
    </div>
  );
}

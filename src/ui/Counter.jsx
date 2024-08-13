import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import IconButton from "./IconButton";
import { useState } from "react";

export default function Counter({ max, intiValue = 1 }) {
  const [count, setCount] = useState(intiValue);
  function handleInc() {
    if (count < max) {
      setCount((prev) => prev + 1);
    }
  }
  function handleDec() {
    count > 1 ? setCount((prev) => prev - 1) : "";
  }
  return (
    <div className="flex items-center gap-2">
      <IconButton size="sm" onClick={handleDec}>
        <IoIosArrowDown />
      </IconButton>
      <p className="font-bold text-custom-black-80">{count}</p>
      <IconButton size="sm" onClick={handleInc}>
        <IoIosArrowUp />
      </IconButton>
    </div>
  );
}

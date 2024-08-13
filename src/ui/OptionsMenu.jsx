import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classNames from "classnames";

const defaultOptions = [
  {
    title: "Price (0 - 9)",
    value: "price-asc",
  },
  {
    title: "Price (9 - 0)",
    value: "price-dec",
  },
  {
    title: "Rating (0 - 5)",
    value: "rate-asc",
  },
  {
    title: "Rating (5 - 0)",
    value: "rate-dec",
  },
];

export default function OptionsMenu({
  title = "Sort By",
  options = defaultOptions,
  className,
}) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(() => {
    const query = new URLSearchParams(window.location.search);
    return query.get("sort") || "";
  });
  const baseStyle = "relative";
  const optionsDivClassName = classNames(baseStyle, className);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard interaction
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // Handle option selection
  function handleOptionClick(value) {
    setSelectedValue(value);
    const newParams = new URLSearchParams(location.search);
    newParams.set(title.toLowerCase(), value);
    navigate(`${location.pathname}?${newParams.toString()}`);
    setOpen(false);
  }

  return (
    <div ref={menuRef} className={optionsDivClassName}>
      <Button
        size="small"
        type="option"
        className="flex items-center justify-center gap-2"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {title}
        {open ? (
          <IoIosArrowUp size="1.5rem" />
        ) : (
          <IoIosArrowDown size="1.5rem" />
        )}
      </Button>
      {open && (
        <ul
          className="absolute mt-2 py-2  bg-white border border-gray-300 rounded-lg shadow-lg z-50 w-max"
          role="menu"
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`text-custom-black-60 text-xl text-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                selectedValue === opt.value ? "bg-gray-200" : ""
              }`}
              role="menuitem"
              tabIndex={0}
              onClick={() => handleOptionClick(opt.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleOptionClick(opt.value);
                }
              }}
            >
              {opt.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

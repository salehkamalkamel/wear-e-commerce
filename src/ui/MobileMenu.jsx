import { useState } from "react";
import { IoMdList } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import IconButton from "./IconButton";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { NavLink } from "react-router-dom";

export default function MobileMenu({
  menuItems = ["Home", "About", "Products", "Contact"],
}) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => setOpen(false));

  return (
    <div className="block sm:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
        className="w-8 h-8 flex items-center justify-center outline-none"
      >
        <IoMdList size="100%" />
      </button>
      <div
        className={`flex bg-custom-black-10 z-50 w-[70%] h-[100%] fixed top-0 right-0 drop-shadow-2xl menu-transition ${
          open ? "menu-open" : "menu-closed"
        }`}
        ref={ref}
      >
        <IconButton
          type="secondary"
          onClick={() => setOpen(false)}
          aria-label="Close Menu"
          className="text-custom-white m-8 absolute top-0 right-0"
        >
          <RxCross2 size="2rem" />
        </IconButton>
        <nav className="mx-auto mt-24">
          <ul className="text-2xl font-bold text-custom-black-80 flex flex-col gap-8 mt-24 items-start justify-center">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.toLowerCase()}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-gray-600"
                }
              >
                {item}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

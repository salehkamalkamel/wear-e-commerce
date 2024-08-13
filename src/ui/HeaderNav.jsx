import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center justify-center sm:gap-4 md:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-xl font-normal ${
              isActive ? "text-primary" : "text-custom-black-80"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-xl font-normal ${
              isActive ? "text-primary" : "text-custom-black-80"
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `text-xl font-normal ${
              isActive ? "text-primary" : "text-custom-black-80"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            `text-xl font-normal ${
              isActive ? "text-primary" : "text-custom-black-80"
            }`
          }
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}

import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/">
      <p className="text-4xl font-bold text-custom-black-80 text-center">
        Wear.
      </p>
    </NavLink>
  );
}

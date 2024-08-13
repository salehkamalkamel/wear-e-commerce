import { NavLink } from "react-router-dom";

export default function FooterList({ title = "Section Title", items = [] }) {
  return (
    <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
      <h6 className="text-custom-black-100 font-bold text-lg py-2">{title}</h6>
      <ul className="flex flex-col gap-2 justify-center items-center sm:justify-start sm:items-start">
        {items.length > 0 ? (
          items.map((item, index) => (
            <NavLink
              key={index}
              className="text-md font-[1rem] text-custom-black-60 cursor-pointer"
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))
        ) : (
          <li className="text-md text-custom-black-60">No items available</li>
        )}
      </ul>
    </div>
  );
}

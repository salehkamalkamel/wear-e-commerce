import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navigator({ children, path = -1 }) {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center justify-center gap-4 bg-transparent outline-none text-primary font-medium"
      onClick={() => navigate(path)}
    >
      <IoIosArrowBack />
      {children}
    </button>
  );
}

import { RxCross2 } from "react-icons/rx";
import IconButton from "./IconButton";
import { useWishListContext } from "../contexts/WishListContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function WishListItem({ item }) {
  const { images, title, price, id } = item;
  const { removeFromWishList } = useWishListContext();
  const navigate = useNavigate();

  function handleDelete() {
    removeFromWishList(id);
    toast.success("Product removed successfully");
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border rounded-xl bg-white shadow-md">
      <div className="flex items-center gap-4 flex-1">
        <div className="h-24 w-24 flex-shrink-0">
          <img
            src={images[0]}
            alt={`Image of ${title}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <p className="text-custom-black-100 text-lg font-bold flex-1">
          {title}
        </p>
      </div>
      <div className="flex-shrink-0 text-lg font-bold text-custom-black-100">
        EGP {price}
      </div>
      <div className="flex-shrink-0">
        <Button
          size="small"
          type="secondary"
          onClick={() => navigate(`/product/${id}`)}
        >
          See Product
        </Button>
      </div>
      <div className="flex-shrink-0">
        <IconButton
          type="delete"
          size="sm"
          aria-label={`Remove ${title} from wish list`}
          onClick={handleDelete}
        >
          <RxCross2 />
        </IconButton>
      </div>
    </div>
  );
}

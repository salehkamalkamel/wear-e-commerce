import { MdAddShoppingCart } from "react-icons/md";
import { TbHeartPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import IconButton from "../../ui/IconButton";
import RatingStars from "../../ui/RatingStars";
import { useCartContext } from "../../utils/cartUtils";
import { useProductContext } from "../../contexts/ProductContext";
import { useWishListContext } from "../../contexts/WishListContext";

export default function ProductCard({ product, size = "lg" }) {
  const {
    quantity,
    images,
    title,
    description,
    price,
    rating = 0,
    discount,
    previousPrice,
    category,
    id,
  } = product;

  const navigate = useNavigate();
  const { add } = useCartContext();
  const { removeProduct } = useProductContext();
  const { addToWishList, wishListData } = useWishListContext();

  const handleCardClick = () => {
    if (quantity > 0) navigate(`/product/${id}`);
  };

  const handleAddToCart = (event) => {
    if (quantity > 0) {
      removeProduct(id, 1);
      event.stopPropagation();
      toast.success("Added to your cart");
      add(product);
    }
  };

  const handleAddToWishList = (event) => {
    event.stopPropagation();
    if (!wishListData.includes(product)) {
      addToWishList(product);
      toast.success("Added to your wish list");
    } else {
      toast.error("Already in your Wish list");
    }
  };

  const isDisabled = quantity === 0;

  // Define card sizes
  const sizeClasses = {
    sm: "w-48 h-80 p-4",
    md: "w-64 h-auto p-4",
    lg: "w-80 h-112 p-6",
  };

  return (
    <div
      className={`bg-white hover:bg-gray-50 rounded-2xl cursor-pointer flex flex-col ${
        sizeClasses[size] || sizeClasses.lg
      } shadow-lg transition-transform transform hover:scale-[1.02] ${
        isDisabled ? "opacity-70 cursor-not-allowed" : ""
      }`}
      onClick={handleCardClick}
    >
      <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg">
        <img
          src={images[0]}
          loading="lazy"
          alt={`Image of ${title}`}
          className="object-cover w-full h-full"
        />
        {quantity <= 5 && quantity > 0 && (
          <p className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            Only {quantity} left
          </p>
        )}
        {isDisabled && (
          <p className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            Out of stock
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <p className="text-gray-900 font-semibold text-lg">{title}</p>
        <p className="text-gray-700 text-sm truncate">{description}</p>
        <p className="text-white font-semibold text-xs py-1 px-2 rounded-full bg-green-600 w-fit">
          {category}
        </p>
        <p
          className={`font-bold text-xl ${
            discount ? "text-red-600" : "text-gray-900"
          }`}
        >
          <span className="text-base">EGP</span> {price}
          {discount && (
            <span className="text-sm text-red-600 px-2 line-through">
              {previousPrice}
            </span>
          )}
        </p>
        <RatingStars rating={rating} />
        <div className="flex gap-4 mt-4">
          <IconButton
            aria-label="Add to cart"
            onClick={(event) => handleAddToCart(event)}
            disabled={isDisabled}
          >
            <MdAddShoppingCart className="text-xl" />
          </IconButton>
          <IconButton
            type="secondary"
            aria-label="Add to favorites"
            onClick={(event) => handleAddToWishList(event)}
            disabled={isDisabled}
          >
            <TbHeartPlus className="text-xl" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

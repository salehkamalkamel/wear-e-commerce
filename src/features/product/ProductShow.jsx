import { TbHeartPlus } from "react-icons/tb";
import AutoCarousel from "../../ui/AutoCarousel";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import IconButton from "../../ui/IconButton";
import RatingStars from "../../ui/RatingStars";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../utils/cartUtils";
import { useProductContext } from "../../contexts/ProductContext";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import Navigator from "../../ui/Navigator";
import { useWishListContext } from "../../contexts/WishListContext";

export default function ProductShow() {
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const { add } = useCartContext();
  const { removeProduct, products } = useProductContext();
  const product = products.find(
    (product) => product.id === parseInt(productId, 10)
  );
  const { addToWishList, wishListData } = useWishListContext();

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  const handleAddToWishList = () => {
    if (!wishListData.includes(product)) {
      addToWishList(product);
      toast.success("Added to your wish list");
    } else {
      toast.error("Already in your Wish list");
    }
  };

  function handleAddToCart() {
    if (product.quantity === 0) {
      toast.error("Product is out of stock");
      return;
    }
    removeProduct(+productId, count);
    add(product, count);
    setCount(1);
    toast.success(`${count} product(s) added to your cart`);
  }

  function handleInc() {
    if (count < product.quantity) {
      setCount((prev) => prev + 1);
    }
  }

  function handleDec() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <Container className="py-8 sm:py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center items-start gap-4">
          <Navigator path="/products">Back to products</Navigator>
          <AutoCarousel
            slides={product.images}
            auto={false}
            width="w-full max-w-md"
            height="h-[20rem]"
          />
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start gap-6 sm:pl-12">
          <Heading
            as="h5"
            className="text-2xl sm:text-3xl font-semibold text-center sm:text-left"
          >
            {product.title}
          </Heading>
          <p className="text-custom-black-60 text-base sm:text-lg text-center sm:text-left">
            {product.description}
          </p>
          <RatingStars rating={Math.round(product.rating)} />
          <p className="text-custom-black-100 font-bold text-xl">
            <span className="text-lg">EGP</span> {product.price}
          </p>
          {product.quantity <= 5 && (
            <p className="text-custom-red text-sm">
              Only {product.quantity} available
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <Button
              className="w-full sm:w-auto"
              onClick={handleAddToCart}
              disabled={product.quantity === 0}
            >
              Add to Cart
            </Button>
            <div className="flex items-center gap-2">
              <IconButton
                size="sm"
                onClick={handleDec}
                disabled={count <= 1}
                aria-label="Decrease quantity"
              >
                <IoIosArrowDown />
              </IconButton>
              <p className="font-bold text-custom-black-80">{count}</p>
              <IconButton
                size="sm"
                onClick={handleInc}
                disabled={count >= product.quantity}
                aria-label="Increase quantity"
              >
                <IoIosArrowUp />
              </IconButton>
            </div>
            <IconButton
              type="secondary"
              className="mt-4 sm:mt-0"
              onClick={() => handleAddToWishList()}
            >
              <TbHeartPlus className="text-xl" />
            </IconButton>
          </div>
        </div>
      </div>
    </Container>
  );
}

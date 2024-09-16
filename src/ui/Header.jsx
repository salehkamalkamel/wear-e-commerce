import { NavLink } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import Window from "./MobileMenu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbHeart } from "react-icons/tb";
import { useCartContext } from "../utils/cartUtils";
import { useWishListContext } from "../contexts/WishListContext";

export default function Header({
  logoAltText = "Company Logo",
  cartAriaLabel = "Shopping Cart",
  wishListAriaLabel = "Wish List",
}) {
  const { cartData } = useCartContext();
  const { wishListData } = useWishListContext();

  return (
    <header className="bg-custom-black-10 border-custom-black-20 border-b-[1px] sticky top-0 z-50">
      <div className="h-[4rem] flex items-center justify-between max-w-[88rem] mx-auto py-4 px-8">
        <Logo alt={logoAltText} />
        <nav>
          <HeaderNav />
        </nav>
        <div className="flex items-center justify-center gap-4">
          <NavLink
            to="cart"
            aria-label={cartAriaLabel}
            className="flex items-center relative"
          >
            <MdOutlineShoppingCart size="1.5rem" color="#454547" />
            {cartData.length > 0 && (
              <span className="bg-red-600 text-white font-bold text-[0.5rem] absolute bottom-0 right-[-30%] px-1 py-[2px] rounded-full flex items-center justify-center">
                {cartData.length}
              </span>
            )}
          </NavLink>
          <NavLink
            to="wishList"
            aria-label={wishListAriaLabel}
            className="flex items-center relative"
          >
            <TbHeart size="1.5rem" color="#454547" />
            {wishListData.length > 0 && (
              <span className="bg-red-600 text-white font-bold text-[0.5rem] absolute bottom-0 right-[-30%] px-1 py-[2px] rounded-full flex items-center justify-center">
                {wishListData.length}
              </span>
            )}
          </NavLink>
          <Window />
        </div>
      </div>
    </header>
  );
}

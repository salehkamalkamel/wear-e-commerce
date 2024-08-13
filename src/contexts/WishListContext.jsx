import { createContext, useContext, useEffect, useState } from "react";

const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishListData, setWishListData] = useState(() => {
    const storedData = localStorage.getItem("wishListData");
    return storedData ? JSON.parse(storedData) : [];
  });

  function addToWishList(item) {
    setWishListData((prev) => [...prev, item]);
  }

  function removeFromWishList(itemId) {
    setWishListData((prev) => prev.filter((item) => item.id !== itemId));
  }

  function clearWishList() {
    setWishListData([]);
  }

  useEffect(() => {
    localStorage.setItem("wishListData", JSON.stringify(wishListData));
  }, [wishListData]);

  return (
    <WishListContext.Provider
      value={{ wishListData, addToWishList, removeFromWishList, clearWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
}

const useWishListContext = () => useContext(WishListContext);

// eslint-disable-next-line react-refresh/only-export-components
export { WishListProvider, useWishListContext };

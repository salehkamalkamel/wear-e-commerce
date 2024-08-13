import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartData, setCartData] = useState(() => {
    const storedData = localStorage.getItem("cartData");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  const add = useCallback((product, amount = 1) => {
    setCartData((prev) => {
      const existingProductIndex = prev.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex > -1) {
        const updatedCart = [...prev];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          count: updatedCart[existingProductIndex].count + amount,
        };
        return updatedCart;
      } else {
        return [...prev, { product, count: amount, id: product.id }];
      }
    });
  }, []);

  const decrease = useCallback((productId, amount) => {
    setCartData((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newCount = Math.max(item.count - amount, 0);
            if (newCount === 0) {
              return null; // Mark item for removal
            }
            return { ...item, count: newCount };
          }
          return item;
        })
        .filter(Boolean); // Remove null items
    });
  }, []);

  const remove = useCallback((productId) => {
    setCartData((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const clearAll = useCallback(() => {
    setCartData([]);
  }, []);

  return (
    <CartContext.Provider value={{ cartData, add, remove, clearAll, decrease }}>
      {children}
    </CartContext.Provider>
  );
}

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };

import { createContext, useContext, useState } from "react";
import productsData from "../features/products/data-products";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(productsData);

  function addProduct(productId, amount = 1) {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: (product.quantity || 0) + amount,
          };
        }
        return product;
      });

      return updatedProducts;
    });
  }

  function removeProduct(productId, amount = 1) {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          const newQuantity = Math.max((product.quantity || 0) - amount, 0);
          return {
            ...product,
            quantity: newQuantity,
          };
        }
        return product;
      });
    });
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);

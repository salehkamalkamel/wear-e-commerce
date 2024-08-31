import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./utils/cartUtils.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { WishListProvider } from "./contexts/WishListContext.jsx";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <WishListProvider>
        <ProductProvider>
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: "#F5F2F2",
              },
            }}
          />
          <App />
          <Analytics />
        </ProductProvider>
      </WishListProvider>
    </CartProvider>
  </React.StrictMode>
);

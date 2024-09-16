import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import Applayout from "./ui/AppLayout";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import WishListPage from "./pages/WishListPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./ui/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="wishList" element={<WishListPage />} />
            <Route path="product/:productId" element={<ProductPage />} />
          </Route>
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Applayout() {
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

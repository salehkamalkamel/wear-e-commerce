import FooterList from "./FooterList";
import Logo from "./Logo";
import SocialList from "./SocialList";

const footerData = {
  products: [
    { name: "All products", path: "products" },
    { name: "Mens", path: "/products?category=mens" },
    { name: "Womans", path: "/products?category=womans" },
    { name: "Kids", path: "/products?category=kids" },
  ],
  company: [
    { name: "About Us", path: "about" },
    { name: "Careers", path: "about" },
    { name: "Contact", path: "contact" },
  ],
  support: [
    { name: "Help Center", path: "contact" },
    { name: "Returns", path: "contact" },
    { name: "Shipping Info", path: "contact" },
    { name: "Privacy Policy", path: "contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-custom-black-10 border-t border-custom-black-20 mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-8 max-w-[88rem] mx-auto gap-8">
        <Logo className="flex-shrink-0" />
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start gap-8 sm:gap-16">
          <FooterList title="Products" items={footerData.products} />
          <FooterList title="Company" items={footerData.company} />
          <FooterList title="Support" items={footerData.support} />
        </div>
        <SocialList className="flex-shrink-0" />
      </div>
    </footer>
  );
}

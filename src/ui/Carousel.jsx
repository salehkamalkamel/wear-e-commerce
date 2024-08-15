import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import IconButton from "./IconButton";
import styles from "./SlideCarousel.module.css";
import { useEffect, useRef, useState } from "react";

export default function Carousel({ children }) {
  const elementRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const updateItemWidth = () => {
      if (elementRef.current) {
        const firstItem = elementRef.current.firstElementChild;
        if (firstItem) {
          setItemWidth(firstItem.clientWidth);
        }
      }
    };

    // Initial width calculation
    updateItemWidth();

    // Update item width on window resize
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  const handleScrollRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative flex items-center w-full p-4 gap-4"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <IconButton
        type="secondary"
        onClick={handleScrollLeft}
        className={`absolute left-0 text-3xl text-white hover:scale-110 transition-opacity opacity-100 duration-300 ${
          showControls ? "sm:opacity-100" : "sm:opacity-0"
        }`}
        aria-label="Scroll left"
        style={{ zIndex: 1 }}
      >
        <IoIosArrowBack />
      </IconButton>
      <div className="relative w-full flex overflow-hidden">
        <div
          ref={elementRef}
          className={`${styles.scrollContainer} flex gap-4 p-6 overflow-x-auto h-max scroll-smooth`}
        >
          {children}
        </div>
      </div>
      <IconButton
        type="secondary"
        onClick={handleScrollRight}
        className={`absolute right-0 text-3xl text-white hover:scale-110 opacity-100 transition-opacity duration-300 ${
          showControls ? "sm:opacity-100" : "sm:opacity-0"
        }`}
        aria-label="Scroll right"
        style={{ zIndex: 1 }}
      >
        <IoIosArrowForward />
      </IconButton>
    </div>
  );
}

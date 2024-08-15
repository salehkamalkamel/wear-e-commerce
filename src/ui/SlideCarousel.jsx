import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import IconButton from "./IconButton";
import styles from "./SlideCarousel.module.css";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SlideCarousel() {
  const elementRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || ""
  );

  useEffect(() => {
    if (elementRef.current) {
      const firstItem = elementRef.current.firstElementChild;
      if (firstItem) {
        const handleImageLoad = () => {
          setItemWidth(firstItem.clientWidth);
        };
        const img = firstItem.querySelector("img");
        if (img) {
          img.addEventListener("load", handleImageLoad);
          return () => img.removeEventListener("load", handleImageLoad);
        } else {
          handleImageLoad();
        }
      }
    }
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

  const handleSelect = (value) => {
    setActiveCategory(value);
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };

  return (
    <div
      className="relative hidden sm:flex gap-8 items-center overflow-hidden mx-auto px-4"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <IconButton
        type="secondary"
        onClick={handleScrollLeft}
        className={`text-2xl text-custom-white hover:scale-110 transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <IoIosArrowBack />
      </IconButton>

      <div className={`${styles.carouselWrapper} relative h-auto w-auto`}>
        <div
          ref={elementRef}
          className={`${styles.scrollContainer} grid grid-flow-col gap-2 overflow-x-auto max-w-[32rem]`}
        >
          {["All", "Mens", "Womans", "Kids", "Sport", "Casual", "Classic"].map(
            (category, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(category.toLowerCase())}
                className={`w-32 h-40 rounded-[2rem] flex flex-col items-center justify-center text-custom-black-80 font-bold cursor-pointer ${
                  activeCategory === category.toLowerCase()
                    ? "bg-custom-black-10"
                    : "bg-transparent"
                }
                hover:bg-custom-black-10`}
              >
                <div className="w-28 h-28">
                  <img
                    loading="lazy"
                    src={`/images/slide-carousel/${category.toLowerCase()}-icon.webp`}
                    alt={`${category} icon`}
                  />
                </div>
                <p>{category}</p>
              </div>
            )
          )}
        </div>
      </div>

      <IconButton
        type="secondary"
        onClick={handleScrollRight}
        className={`text-2xl hover:scale-110 text-custom-white transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <IoIosArrowForward />
      </IconButton>
    </div>
  );
}

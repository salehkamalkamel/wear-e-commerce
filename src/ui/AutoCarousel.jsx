import { useCallback, useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Define default props
const defaultSlides = [
  "/images/home-carousel/image-1.webp",
  "/images/home-carousel/image-2.webp",
  "/images/home-carousel/image-3.webp",
  "/images/home-carousel/image-4.webp",
];

// Carousel Component
const AutoCarousel = ({
  slides = defaultSlides,
  interval = 4000,
  width = "w-96",
  height = "h-96",
  auto,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handleIncrement = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handleDecrement = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleRandom = (idx) => {
    setActiveSlide(idx);
  };

  useEffect(() => {
    if (auto === true) {
      const intervalId = setInterval(handleIncrement, interval);
      return () => clearInterval(intervalId);
    }
  }, [interval, auto, handleIncrement]);

  return (
    <div
      className={`${width} ${height} bg-custom-black-10 sm:rounded-[2rem] relative overflow-hidden`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {showControls && (
        <>
          <button
            onClick={handleDecrement}
            aria-label="Previous slide"
            className="w-12 h-12 rounded-full bg-custom-black-20 text-white cursor-pointer absolute top-[50%] left-4 flex items-center translate-y-[-50%] justify-center z-10 shadow-lg hover:bg-custom-black-30 transition-colors duration-300"
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
          <button
            onClick={handleIncrement}
            aria-label="Next slide"
            className="w-12 h-12 rounded-full bg-custom-black-20 text-white cursor-pointer absolute top-[50%] right-4 flex items-center translate-y-[-50%] justify-center z-10 shadow-lg hover:bg-custom-black-30 transition-colors duration-300"
          >
            <IoIosArrowForward className="text-2xl" />
          </button>
        </>
      )}
      <ul className="relative w-full h-full flex transition-transform duration-700">
        {slides.map((slide, idx) => (
          <li
            key={idx}
            className={`w-full h-full absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></li>
        ))}
      </ul>
      <ul className="flex gap-1 absolute bottom-4 left-[50%] translate-x-[-50%] z-10">
        {slides.map((_, idx) => (
          <li
            onClick={() => handleRandom(idx)}
            key={idx}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              idx === activeSlide ? "bg-custom-black-80" : "bg-custom-black-40"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default AutoCarousel;

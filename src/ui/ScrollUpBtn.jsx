import { IoIosArrowUp } from "react-icons/io";
import IconButton from "./IconButton";
import { useCallback, useEffect, useState } from "react";
// Optionally, import debounce if you're using lodash or a similar library

export default function ScrollUpBtn({ after = 300 }) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (window.scrollY > after) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }, [after]); // Ensure 'after' is included in the dependency array

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return showScrollButton ? (
    <IconButton
      type="primary"
      size="md"
      className="fixed bottom-12 right-12 bg-primary text-white hover:bg-primary-dark shadow-lg"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <IoIosArrowUp />
    </IconButton>
  ) : null;
}

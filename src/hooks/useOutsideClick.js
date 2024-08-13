import { useEffect, useRef } from "react";

export function useOutsideClick(action, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        action();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [action, listenCapturing]);

  return ref;
}

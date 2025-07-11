import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      console.log("wha");
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, true);

    // Cleanup function to remove listener on unmount
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [handler, listenCapturing]);

  return ref;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = () => {
  const location = useLocation();
  useEffect(
    () => () => {
      // <-- Now we return the useEffect teardown effect, which will be fired only after the path/search change for the first time
      try {
        // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      } catch (error) {
        // just a fallback for older browsers
        window.scrollTo(0, 0);
      }
    },
    [location]
  );
  return null;
};

export default useScrollTop;

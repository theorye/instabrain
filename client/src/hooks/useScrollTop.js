import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const useScrollTop = () => {
  const location = useLocation();
  const history = useHistory();

  const background = location.state && location.state.background;

  useEffect(() => {
    if (!background && history.action !== "POP") {
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
    }
  }, [location, background, history]);
  return null;
};

export default useScrollTop;

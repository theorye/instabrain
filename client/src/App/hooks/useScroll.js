/**
 * useScroll React custom hook
 * Usage:
 *    const { x, y, direction } = useScroll();
 *
 */

import { useState, useEffect } from "react";

export const useScroll = (relative = false) => {
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState({
    y: !relative ? window.scrollY : document.body.getBoundingClientRect().top,
    x: !relative ? window.scrollX : document.body.getBoundingClientRect().left,
    direction: ""
  });

  useEffect(() => {
    const listener = e => {
      // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
      setScroll(prev => ({
        // x: document.body.getBoundingClientRect().left,
        // y: -document.body.getBoundingClientRect().top,
        y: !relative
          ? -window.scrollY
          : -document.body.getBoundingClientRect().top,
        x: !relative
          ? window.scrollX
          : document.body.getBoundingClientRect().left,
        // Here we’re comparing the previous state to the current state to get the scroll direction
        direction:
          prev.y <
          (!relative
            ? -window.scrollY
            : -document.body.getBoundingClientRect().top)
            ? "up"
            : "down"
      }));
    };

    window.addEventListener("scroll", listener);
    // cleanup function occurs on unmount
    return () => window.removeEventListener("scroll", listener);
    // Run `useEffect` only once on mount, so add `, []` after the closing curly brace }
  }, [relative]);

  return scroll;
};

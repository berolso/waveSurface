import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) {
  const [isOffScreen, setOffScreen] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      //offsetHeight = distance from top to bottom of browser window
      const offsetHeight = window.document.getElementById(id).offsetHeight;
      // window.pageYOffset = distance scrolled from top
      if (window.pageYOffset > offsetHeight * 0.7) {
        setOffScreen(true);
      }
      if (window.pageYOffset < offsetHeight * 0.7) {
        setOffScreen(false);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);
  return isOffScreen;
}

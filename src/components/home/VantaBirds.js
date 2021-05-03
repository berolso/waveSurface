import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaBirds = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
          color1: 0x77ff,
          color2: 0x63ced,
          colorMode: "lerp",
          birdSize: 0.9,
          wingSpan: 40.0,
          speedLimit: 4.0,
          separation: 100.0,
          alignment: 1.0,
          cohesion: 100.0,
          quantity: 2.0,
          backgroundAlpha: 0.00,

        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef}>
    {/* Foreground content goes here */}
    </div>;
};

export default VantaBirds;

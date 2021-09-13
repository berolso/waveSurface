import React, { useState, useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import SignUpForm from "./SignUpForm";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaSignUp = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 900,
          minWidth: 2000.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
          color: 0x3f51b5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef}>{/* Foreground content goes here */} <SignUpForm/></div>;
};

export default VantaSignUp;

import React, { useState, useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import LoginForm from './LoginForm'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const VantaTopology = (props) => {
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
  return <div ref={myRef}>{/* Foreground content goes here */} <LoginForm/></div>;
};

export default VantaTopology;

import React from "react";
import Lottie from "react-lottie";
import animation from "../../media/animation.json";

const LoadingAnimation = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{margin:'auto',width:'100vw',height:'100vh'}}>
      <Lottie options={lottieOptions} height={100} width={100} />
    </div>
  );
};

export default LoadingAnimation;

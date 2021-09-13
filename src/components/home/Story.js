import React, { useEffect, useState, useRef } from "react";
import "./Story.css";
// import '../../media/unroll2'

// const currentFrame = index => (
//   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
// )

const Story = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [maxScrollTop, setMaxScrollTop] = useState(0);
  const [scrollFraction, setScrollFraction] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);

  const canvasRef = useRef(null)
  const frameCount = 131;


  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.fillStyle = '#006000'

    const onScroll = (e) => {

      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
      setMaxScrollTop(e.target.documentElement.scrollHeight - window.innerHeight)
      setScrollFraction(scrollTop / maxScrollTop)
      setFrameIndex(Math.min(frameCount - 1,Math.floor(scrollFraction * frameCount)))

    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div id="story-board">
      <section className="one">
        <h1>First Page</h1>
        <canvas id='one-canvas' ref={canvasRef} onScroll={() => alert("Table Scrolled")}/>
      </section>
      <section className="two">
        <h1>second Page</h1>
      </section>
      <section className="three">
        <div>
          <h1>third Page</h1>
        </div>
      </section>
    </div>
  );
};

export default Story;

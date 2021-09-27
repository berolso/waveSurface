import React, { useEffect, useState, useRef } from "react";
import { Link as Scroll } from "react-scroll";
import Markdown from "./Markdown";
import './Unroll.css'

import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";

// import '../../media/unrollFrames'
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("../../media/unrollFrames",false)
);

const useStyles = makeStyles({
  root: {
    width: '95%',
  },
});

const Unroll = ({ isOffScreen = true }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [trigger,setTrigger] = useState(null)

  const totalFrames = images.length - 50;
  const ref = useRef()

  const classes = useStyles();

  useEffect(() =>{
    let canvas = ref.current;
    let context = canvas.getContext("2d");

    const currentFrame = (index) => {
      return images[Math.max(index,0)].default
    };

    const img = new Image();
    
    img.onload = function () {
      canvas.width = 1280;
      canvas.height = 720;
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      // this causes the animation to flicker
      // context.drawImage(img, 200, 0);
    };

    const docHeight = document.documentElement.scrollHeight

    const scrollTopAtDocBottom = docHeight - window.innerHeight
    const scrollRange = scrollTopAtDocBottom - trigger || 0

    const scrollFraction = totalFrames / scrollRange

    const frameIndex = trigger ? Math.max(Math.floor((scrollTop - trigger) * scrollFraction), 0) : 0

    requestAnimationFrame(() => updateImage(frameIndex + 1));

  },[scrollTop,trigger,totalFrames])

  function handleScroll(e) {
    // setScrollTop(window.pageYOffset);
    setScrollTop(document.all[0].scrollTop);
    if(isOffScreen && trigger === null){
      setTrigger(window.pageYOffset)
    }
    if(!isOffScreen){
      setTrigger(null)
    }
  }

  window.onscroll = handleScroll

  return (
    <div className={classes.root}>
      <Collapse in={isOffScreen} {...(isOffScreen ? { timeout: 3000 } : {})}>
        <div >

          <Grid container spacing={2}>
            <Grid item xs={6} >
              <Markdown />
            </Grid>
            {/* <div id="story-board">
      <section className="one">
        <h1>First Page</h1>
        <canvas id='one-canvas' ref={canvasRef} onScroll={() => alert("Table Scrolled")}/>
      </section> */}
            <Grid item xs={6}>
              <div id="unroll-div">
                <section className='unroll'>
                  <canvas id='one-canvas' data-op={isOffScreen} ref={ref}/>
                </section>
              </div>
            </Grid>
          </Grid>
        </div>
      </Collapse>
      <Scroll to='header' smooth={true} delay={300}>
        <IconButton>
          <ExpandLessIcon style={{fontSize: '15rem'}}/>
        </IconButton>
      </Scroll>
    </div>
  )
}

export default Unroll

import React, { useEffect, useState } from "react";
import logo from "../../media/wavesurface_art-branding_stamp copy.png";



import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: (0, 50),
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "right",
  },
  title: {
    color: "#454545",
    fontSize: "2rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
  logo: {
    width: '60%',
  }
}));

const Landing = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      <div className={classes.root} id="header">
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <img alt='home logo'className={classes.logo} src={logo}></img>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            {/* <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton> */}
          </Scroll>
        </div>
      </div>
    </>
  );
};

export default Landing;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import instructionals from "../../media/instructionals.png";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    // backgroundColor: theme.palette.grey[800],
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: instructionals,
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "95% 10%",
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "45%",
      fontSize: '10px'
    },
    [theme.breakpoints.up("lg")]: {
      backgroundSize: "35%",
      backgroundPosition: "90% 10%"
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    // backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    width: "100%",
    minHeight: "40vh",
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

export default function PreviewHeader(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <div
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item sm={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography variant="h4" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

PreviewHeader.propTypes = {
  post: PropTypes.object,
};

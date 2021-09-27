import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(1),
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
  card: {
    boxShadow: 'none'
  },
  cardMedia:{
    height: 300,
  }
}));

export default function PreviewHeader(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <>
      <div className={classes.mainFeaturedPost}>
        <Grid className={classes.container} container spacing={0}>
          <Grid item xs={12} sm={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography variant="h4" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="inherit" component={Link} to={post.link}>
                {post.linkText}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card square={true} className={classes.card}>
              <CardMedia
                image={post.image}
                className={classes.cardMedia}
              ></CardMedia>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

PreviewHeader.propTypes = {
  post: PropTypes.object,
};

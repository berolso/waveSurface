import React, { useContext } from "react";

import UserContext from "../context/UserContext";
import { deleteInstructional } from "../actions/instructionals";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const InstructionalCard = ({ card, dispatch, setIsLoaded }) => {
  const classes = useStyles();

  const { currentUser } = useContext(UserContext);

  const handleDelete = async () => {
    try {
      dispatch(await deleteInstructional(card.id));
      setIsLoaded(false);
    } catch (err) {
      console.error("failed to delete", err);
    }
  };

  return (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={card.json.image_url || "https://source.unsplash.com/random"}
          title={card.json.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography>{card.json.description}</Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Button
              size="small"
              color="primary"
              href={card.json.url_private_download}
            >
              Download
            </Button>
            {currentUser && (
              <IconButton
                aria-label="delete"
                className={classes.margin}
                size="medium"
                color="secondary"
                onClick={handleDelete}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            )}
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default InstructionalCard;

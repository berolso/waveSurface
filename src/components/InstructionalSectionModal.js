import React from "react";
import fullWave from "../media/fullWave.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "50%",
    left: "25%",
    top: "10%",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image: {
    width: "100%",
  },
}));

const InstructionalSectionModal = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.paper}>
        <h2 id="simple-modal-title">See instructionals by section</h2>
        <p id="simple-modal-description">
          🚧 Under Construciton 🚧 Will be clickable model to filter
          instructionals by area.
        </p>
        <img alt="fullWave" src={fullWave} className={classes.image} />
      </Card>
    </div>
  );
};

export default InstructionalSectionModal;

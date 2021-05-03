import React from "react";

import { Link as RRLink } from "react-router-dom";

import InstructionalSectionModal from "./InstructionalSectionModal";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const InstructionalHeader = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Instructionals
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {`Browse through provided instructionals or request to have one made for a specific situation`}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                to="/instructionals/request"
                component={RRLink}
              >
                Request Instructional
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={handleOpen}>
                View sections
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <InstructionalSectionModal />
              </Modal>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default InstructionalHeader;

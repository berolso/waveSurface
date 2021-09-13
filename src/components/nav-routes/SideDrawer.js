import React from "react";

import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CompassCalibrationIcon from '@material-ui/icons/CompassCalibration';

import { makeStyles, withTheme } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    width: "200px",
    backgroundColor: "#3f51b5",
    color: 'white'
  },
});

const SideDrawer = ({ history, drawerState, handleClose }) => {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <InboxIcon style={{ color: 'white' }}/>,
      onClick: () => history.push("/"),
    },
    {
      text: "About",
      icon: <ImportContactsIcon style={{ color: 'white' }}/>,
      onClick: () => history.push("/about"),
    },
    {
      text: "Bomian",
      icon: <CompassCalibrationIcon style={{ color: 'white' }}/>,
      onClick: () => history.push("/bomian"),
    },
  ];
  return (
    <div>
      <Drawer
        variant="temporary"
        open={drawerState}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default withRouter(SideDrawer);

import React from "react";

import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    width: "200px",
  },
});

const SideDrawer = ({ history, drawerState, handleClose }) => {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <InboxIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "About",
      icon: <ImportContactsIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Bomian",
      icon: <ImportContactsIcon />,
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

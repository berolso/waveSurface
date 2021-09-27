import React from "react";
// import {Link} from 'react-router-dom'
import artLogo from '../../media/waveSurfaceArt-white.svg'

import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CompassCalibrationIcon from '@material-ui/icons/CompassCalibration';

import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "200px",
    // backgroundColor: "#3f51b5",
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
}));

const ArtLogo = () => (
    <img src={artLogo} alt="light Logo" />
)

const SideDrawer = ({ history, drawerState, handleClose }) => {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <InboxIcon style={{ color: 'white' }}/>,
      onClick: () => history.push("/"),
    },
    // {
    //   text: "About",
    //   icon: <ImportContactsIcon style={{ color: 'white' }}/>,
    //   onClick: () => history.push("/about"),
    // },
    {
      text: "Bomian",
      icon: <CompassCalibrationIcon style={{ color: 'white' }}/>,
      onClick: () => history.push("/bomian"),
    },
    {
      full: <ArtLogo style={{ color: 'white' }}/>,
      onClick: () => window.open("https://wavesurface.art", "_blank", 'noopener, noreferrer')
    },
    // <Link to="/">
    //    <img className={classes.logo} src={lightLogo} alt="light Logo" />
    //  </Link>
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
            const { text, icon, full, onClick } = item;
            return (
              <ListItem button key={index} onClick={onClick}>
                {icon && <ListItemIcon key={index}>{icon}</ListItemIcon>}
                {text && <ListItemText key={index} primary={text} />}
                {full}
              </ListItem>

            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default withRouter(SideDrawer);

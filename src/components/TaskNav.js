import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import Badge from "@material-ui/core/Badge";

const TaskNav = ({ todoList, focussedList, setFocussedList }) => {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };
  const [open, setOpen] = React.useState(true);

  const handleListClick = (listName) => {
    setFocussedList(listName);
  };
  const taskCount = (project) => {
    const completedAmount = todoList.filter((todo) => todo.completed === false && todo.project === project)
      .length;
      return completedAmount;
  }
  // this is something new, learn about this
  const navArray = [...new Set(todoList.map((task) => task.project))];
  const NavList = () => {
    return navArray.map((item, index) => (
      <ListItem key={index} button onClick={() => handleListClick(item)}>
        <ListItemIcon>
          <Badge badgeContent={taskCount(item)} color="secondary">
            <TurnedInIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary={item} />
      </ListItem>
    ));
  };

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper} style={{ padding: 16 }}>
        <Box component="div" textOverflow="ellipsis">
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Navigation
              </ListSubheader>
            }
            className={classes.root}
          >
            {" "}
            <NavList />
            {/* <ListItem button onClick={() => handleListClick("Uncategorized")}>
            <ListItemIcon>
              <InboxIcon  color="secondary"/>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          
 
              <ListItem button className={classes.nested} >
                <ListItemIcon>
                  <StarBorder  color="secondary"/>
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>

          <Divider variant="inset" light /> */}
            {/* <ListItem button >
            <ListItemIcon>
              <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Uncategorized" />
          </ListItem> */}
            {/* <ListItem button onClick={() => handleListClick("Criminal Activities")}>
            <ListItemIcon>
              <TurnedInIcon/>
            </ListItemIcon>
            <ListItemText primary="Criminal Activities" />
          </ListItem>
          <Divider variant="inset" light /> */}
          </List>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TaskNav;

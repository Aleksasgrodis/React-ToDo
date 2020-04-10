import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import { red } from "@material-ui/core/colors";
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

  const selectedItem = (project) => {
    if (focussedList == project){
      return true
    }
  }


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
      <ListItem key={index} button selected={selectedItem(item)} onClick={() => handleListClick(item)}>
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
          <List>
            <NavList />
          </List>
  );
};

export default TaskNav;

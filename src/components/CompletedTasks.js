import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Paper } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CompletedCounter from "./CompletedCounter";
import CompletedTaskList from "./CompletedTaskList";


const CompletedTasks = ({
  todoList,
  setTodoList,
  focussedList,
  setFocussedTask,
}) => {
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
  return (
    <Paper variant="outlined" style={{ margin: 16, padding: 4 }}>
      <CompletedCounter todoList={todoList} focussedList={focussedList} />
      <List className={classes.root}>
        <CompletedTaskList
          todoList={todoList}
          setTodoList={setTodoList}
          setFocussedTask={setFocussedTask}
          focussedList={focussedList}
        />
      </List>
    </Paper>
  );
};

export default CompletedTasks
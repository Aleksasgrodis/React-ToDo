import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";



const ActiveTasks = ({todoList, setTodoList, checkboxHandler, deleteTask}) => {
    // const deleteTask = (id, e) => {
    //     e.preventDefault();
    //     let newList = [...todoList];
    //     let toberemoved = newList.map((task) => task.id).indexOf(id);
    //     newList.splice(toberemoved, 1);
    //     setTodoList(newList);
    //   };
    
    //   const checkboxHandler = (id) => {
    //     let newList = [...todoList];
    //     let indexOfTarget = newList.map((task) => task.id).indexOf(id);
    //     newList[indexOfTarget].completed = !newList[indexOfTarget].completed;
    //     newList[indexOfTarget].date = new Date();
    //     setTodoList(newList);
    //   };
    
    return todoList
      .filter((task) => task.completed === false)
      .sort((a, b) => b.date - a.date)
      .map((task, index) => (
        <div key={task.id}>
          <ListItem key={task.id} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.completed}
                onChange={() => checkboxHandler(task.id)}
              />
            </ListItemIcon>
            <ListItemText primary={task.text} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={(e) => {
                  return deleteTask(task.id, e);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </div>
      ));
  };

  export default ActiveTasks;
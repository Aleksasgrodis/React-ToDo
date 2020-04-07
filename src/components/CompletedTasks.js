import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from '@material-ui/core/Divider';




const CompletedTasks = ({todoList, setTodoList, setFocussedTask, focussedList}) => {
    const deleteTask = (id, e) => {
      e.preventDefault();
      let newList = [...todoList];
      let toberemoved = newList.map((task) => task.id).indexOf(id);
      newList.splice(toberemoved, 1);
      setTodoList(newList);
    };
  
    const checkboxHandler = (id) => {
      let newList = [...todoList];
      let indexOfTarget = newList.map((task) => task.id).indexOf(id);
      newList[indexOfTarget].completed = !newList[indexOfTarget].completed;
      newList[indexOfTarget].date = new Date();
      setTodoList(newList);
    };

    const onClickHandler =(id) => {
    setFocussedTask(id)
    }
    return todoList
      .filter((task) => task.completed === true && task.project === focussedList)
      .sort((a, b) => b.date - a.date)
      .map((task, index) => (
        <div key={task.id}>
          <ListItem dense button onClick={() => onClickHandler(task.id)}>
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
          <Divider variant="inset" light />
        </div>
      ));
  };
  export default CompletedTasks;
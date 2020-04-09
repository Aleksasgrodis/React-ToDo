import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const NewTaskComponent = ({todoList, setTodoList, focussedList}) => {
    const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
    }));
  
    const classes = useStyles();

    const [newTodo, setNewTodo] = useState("");
    const addTodo = (event) => {
      event.preventDefault();
      if (newTodo.length !== 0) {
        const newTodos = {
          text: newTodo,
          completed: false,
          id: Date.now(),
          date: new Date(),
          note: "",
          project: focussedList
        };
        setTodoList(todoList.concat(newTodos));
        setNewTodo("");
      } else {
        alert("Task input field may not be empty!");
      }
    };
    const onChangeHandler = (event) => {
      setNewTodo(event.target.value);
    };

    return (
      <form onSubmit={addTodo}>
          <Paper elevation={1} style={{ margin: 16, padding: 16 }}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  id="outlined-basic"
                  label="Type your task here..."
                  variant="outlined"
                  value={newTodo}
                  onChange={(e) => onChangeHandler(e)}
                  fullWidth
                  size="small"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  size="small"
                  className={classes.button}
                >
                  <AddIcon style={{ fontSize: 30 }} />
                </Button>
              </Grid>
            </Grid>
          </Paper>
      </form>
    );
  };

  export default NewTaskComponent;
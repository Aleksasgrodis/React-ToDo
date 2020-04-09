import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const ActiveCounter = ({todoList, focussedList}) => {
    const completedAmount = todoList.filter((todo) => todo.completed === false && todo.project === focussedList)
      .length;
    if (completedAmount === 1) {
      return (
        <Typography variant="h6" gutterBottom>
          <Box textAlign="left" m={1}>
            {completedAmount} active task remains.
          </Box>
        </Typography>
      );
    }
    return (
      <Typography variant="h6" gutterBottom>
        <Box textAlign="left" m={1}>
          {completedAmount} active tasks remain.
        </Box>
      </Typography>
    );
  };

  export default ActiveCounter;
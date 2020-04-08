import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const CompletedCounter = ({todoList, focussedList}) => {
    const completedAmount = todoList.filter((todo) => todo.completed === true && todo.project === focussedList)
      .length;
    if (completedAmount === 1) {
      return (
        <Typography variant="h6" gutterBottom>
          <Box textAlign="left" m={1}>
            {completedAmount} task completed
          </Box>
        </Typography>
      );
    }
    return (
      <Typography variant="h6" gutterBottom>
        <Box textAlign="left" m={1}>
          {completedAmount} tasks completed.
        </Box>
      </Typography>
    );
  };

  export default CompletedCounter;
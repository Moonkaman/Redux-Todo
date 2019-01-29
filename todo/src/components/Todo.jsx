import React from "react";

const Todo = props => {
  return (
    <div onClick={e => props.toggleTodo(e, props.index)}>
      <h2 className={props.todo.completed ? "task completed-task" : "task"}>
        {props.todo.value}
      </h2>
    </div>
  );
};

export default Todo;

import React from "react";

const Todo = props => {
  return (
    <div
      onClick={e => props.toggleTodo(e, props.index)}
      className={
        props.todo.completed
          ? props.lastTodo
            ? "todo last-todo completed"
            : "todo completed"
          : props.lastTodo
          ? "todo last-todo"
          : "todo"
      }
    >
      <h2>{props.todo.value}</h2>
    </div>
  );
};

export default Todo;

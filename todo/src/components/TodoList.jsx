import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo
          completeTodo={props.completeTodo}
          index={index}
          todo={todo}
          key={index}
        />
      ))}
    </div>
  );
};

export default TodoList;

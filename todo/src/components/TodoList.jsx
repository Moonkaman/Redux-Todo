import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo
          toggleTodo={props.toggleTodo}
          index={index}
          todo={todo}
          key={index}
          lastTodo={props.todos.length - 1 === index}
        />
      ))}
    </div>
  );
};

export default TodoList;

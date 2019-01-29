import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        name="todoInput"
        onChange={props.handleChange}
        value={props.todoInput}
        type="text"
        placeholder="Todo..."
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;

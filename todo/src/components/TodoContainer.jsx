import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class TodoContainer extends Component {
  state = {
    todoInput: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoInput);
    this.setState({
      todoInput: ""
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.props.todos} />
        <TodoForm
          todoInput={this.state.todoInput}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoContainer);

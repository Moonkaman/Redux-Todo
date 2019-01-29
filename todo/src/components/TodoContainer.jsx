import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, toggleTodo } from "../actions";

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

  toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <div>
        <TodoList todos={this.props.todos} toggleTodo={this.toggleTodo} />
        <TodoForm
          todoInput={this.state.todoInput}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
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
  { addTodo, toggleTodo }
)(TodoContainer);

import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, toggleTodo, clearTodos } from "../actions";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import "./Todo.css";

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

  clearTodos = e => {
    e.preventDefault();
    this.props.clearTodos();
  };

  render() {
    return (
      <div className="todo-top-cont">
        <h2 className="todo-title">My Todo List</h2>
        <div className="todo-cont">
          <TodoList todos={this.props.todos} toggleTodo={this.toggleTodo} />
          <TodoForm
            todoInput={this.state.todoInput}
            handleChange={this.handleChange}
            addTodo={this.addTodo}
            clearTodos={this.clearTodos}
          />
        </div>
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
  { addTodo, toggleTodo, clearTodos }
)(TodoContainer);

import React, { Component } from "react";
import { connect } from "react-redux";

import TodoList from "./TodoList";
class TodoContainer extends Component {
  state = {
    todoInput: ""
  };

  render() {
    return (
      <div>
        <TodoList todos={this.props.todos} />
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
  {}
)(TodoContainer);

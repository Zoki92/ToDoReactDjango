import React, { Component } from "react";
import Todo from "./todo_item";
import axios from "axios";

import { PropTypes } from "prop-types";
import { getTodos } from "./../actions/todoActions";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <React.Fragment>
        {todos.map(todo => (
          <Todo data={todo} key={todo.id} />
        ))}
      </React.Fragment>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todo.todos
});

export default connect(
  mapStateToProps,
  {
    getTodos
  }
)(TodoList);

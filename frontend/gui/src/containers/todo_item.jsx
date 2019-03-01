import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { deleteTodo } from "./../actions/todoActions";
import { connect } from "react-redux";

class Todo extends Component {
  onDeleteClick = id => {
    this.props.deleteTodo(id);
  };
  render() {
    const { ...todo } = this.props.data;
    return (
      <div className="jumbotron">
        <h1 className="display-4">
          <Link to={`/${todo.id}`}>{todo.title}</Link>
        </h1>
        <hr className="my-4" />
        <p>{todo.content}</p>
        <div className="row">
          <div className="col-md-6">
            <p>
              <i className="fas fa-business-time text-success" />{" "}
              {todo.date_created}
            </p>
          </div>
          <div className="col-md-5">
            {todo.is_completed ? (
              <div className="form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  <h3>Task Done</h3>
                  <i className="far fa-check-square text-success fa-3x" />
                </label>
              </div>
            ) : (
              <div className="form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  <h3>Task Not Done</h3>{" "}
                  <i className="fas fa-times text-danger fa-3x" />
                </label>
              </div>
            )}
          </div>
          <div className="col-md-1">
            <div className="form-check text-center">
              <label htmlFor="delete">Delete?</label>
              <i
                className="fas fa-times-circle text-danger"
                style={{ cursor: "pointer" }}
                onClick={this.onDeleteClick.bind(this, todo.id)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    deleteTodo
  }
)(Todo);

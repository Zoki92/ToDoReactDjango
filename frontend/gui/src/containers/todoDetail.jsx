import React, { Component } from "react";
import TextInputGroup from "./../components/textInput";
import { PropTypes } from "prop-types";
import { getTodo, updateTodo } from "./../actions/todoActions";
import { connect } from "react-redux";

class TodoDetail extends Component {
  state = {
    title: "",
    content: "",
    is_completed: ""
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { title, content, is_completed } = nextProps.todo;
    this.setState({
      title,
      content,
      is_completed
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTodo(id);
  }

  onSubmit = e => {
    e.preventDefault();
    const { title, content, is_completed } = this.state;

    const { id } = this.props.match.params;
    const updTodo = {
      id,
      title,
      content,
      is_completed
    };
    this.props.updateTodo(updTodo);
    this.setState({
      title: "",
      content: ""
    });
    this.props.history.push("/");
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  render() {
    const { title, content, is_completed } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Edit Todo</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Title"
              name="title"
              placeholder="Enter Title"
              value={title}
              onChange={this.onChange}
            />
            <TextInputGroup
              label="Content"
              name="content"
              placeholder="Enter Content"
              value={content}
              onChange={this.onChange}
            />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="is_completed"
                name="is_completed"
                checked={is_completed}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="is_completed">
                Complete?
              </label>
            </div>
            <input
              type="submit"
              value="Update Todo"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

TodoDetail.propTypes = {
  todo: PropTypes.object.isRequired,
  getTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo.todo
});
export default connect(
  mapStateToProps,
  {
    getTodo,
    updateTodo
  }
)(TodoDetail);

import React, { Component } from "react";
import TextInputGroup from "./../components/textInput";
import { PropTypes } from "prop-types";
import { addTodo } from "./../actions/todoActions";
import { connect } from "react-redux";

class AddItem extends Component {
  state = {
    title: "",
    content: ""
  };
  onSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;
    const newTodo = {
      title,
      content
    };

    this.props.addTodo(newTodo);
    this.setState({
      title: "",
      content: ""
    });
    this.props.history.push("/");
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { title, content } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Todo</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Title"
              name="title"
              placeholder="Enter Title"
              value={title}
              onChange={this.onChange}
            />
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                rows="5"
                label="content"
                name="content"
                placeholder="Enter Content"
                value={content}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Todo"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddItem.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    addTodo
  }
)(AddItem);

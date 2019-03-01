import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./../actions/auth";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal text-white">
        Zoran's ToDo <i className="fas fa-tasks" />
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link to={"/"}>Home</Link>

        <a className="p-2 text-white" href="#">
          About
        </a>
        <Link to={"/add"}>Add Item</Link>
        <button
          onClick={props.logout}
          className="ml-2 btn btn-info btn-sm text-light"
        >
          Logout
        </button>
      </nav>
      <a className="btn btn-outline-primary" href="#">
        Sign up
      </a>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

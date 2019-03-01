import React, { Component } from "react";
import Navbar from "./components/_navbar";
import Footer from "./components/footer";
import TodoList from "./containers/todoList";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./containers/accounts/Login";

import TodoDetail from "./containers/todoDetail";
import AddItem from "./containers/addItem";
import { loadUser } from "./actions/auth";
import store from "./store";
import PrivateRoute from "./common/PrivateRoute";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/add" component={AddItem} />
              <PrivateRoute path="/:id" component={TodoDetail} />
              <PrivateRoute path="/" component={TodoList} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

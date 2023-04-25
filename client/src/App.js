import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";

import { history } from "./helpers";

import { PrivateRoute } from "./components/PrivateRoute";

import { Login } from "./components/Login";
import { Register } from "./components/Register";

import CreateTour from "./components/CreateTour";
import ShowTourList from "./components/ShowTourList";
import ShowTourDetails from "./components/ShowTourDetails";
import UpdateTourInfo from "./components/UpdateTourInfo";

import Me from "./components/Me";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/" component={ShowTourList} />
          <PrivateRoute path="/create-tour" component={CreateTour} />
          <PrivateRoute path="/edit-tour/:id" component={UpdateTourInfo} />
          <PrivateRoute exact path="/me" component={Me} />
          <Route path="/show-tour/:id" component={ShowTourDetails} />
        </div>
      </Router>
    );
  }
}

export default App;

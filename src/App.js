import React from "react";
import Navigation from "./page/Navigation";
import Home from "./page/Home";
import Login from "./page/Login";
import Logout from "./page/Logout";
import Admin from "./page/Admin";
import { Switch, Route, withRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Simulasi Login</h1>
      <hr />
      <Navigation />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import history from "./history";

import AuthContext from "../src/context/auth";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <AuthContext>
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/home" />
        </AuthContext>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

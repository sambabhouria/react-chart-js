import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import './index.css';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/chart" component={App} />
      <Redirect from="/" to="/chart" />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

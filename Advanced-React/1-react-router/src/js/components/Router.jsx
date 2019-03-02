import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Hello from "./Hello";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Hello" component={Hello} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

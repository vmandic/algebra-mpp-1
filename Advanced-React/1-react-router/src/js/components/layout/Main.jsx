import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Hello from "../pages/Hello";
import NotFound from "../pages/NotFound";

const Main = () => {
  return (
    <main>
      {/*
      Switch will render ONLY the matching route, if no Switch is used
      then all the matching routes will render, e.g. NotFound would render always.
      https://reacttraining.com/react-router/web/api/Switch */}
      <Switch>
        {/* Works by "first found partial matching" */}
        <Route exact path="/" component={Home} />
        <Route path="/Hello/:name?" component={Hello} />
        <Route
          path="/Render-Prop-Component"
          render={props => (
            <div>
              I am an ad hoc component that will not trigger the lifecycle after
              navigating to this route. Read more about me on{" "}
              <a href="https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render">
                this stackoverflow link
              </a>
              !
            </div>
          )}
        />
        <Route component={NotFound} />
      </Switch>

      <Route
        path="/hello/jack/jackson"
        render={props => <div>I am Jackson also!</div>}
      />

      <Route
        path="/children-prop"
        children={({ match }) => (
          <div>
            <hr />
            /children-prop was
            {match ? (<b> matched</b>) : " not matched"}!
          </div>
        )}
      />
    </main>
  );
};

export default Main;

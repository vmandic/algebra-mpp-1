import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

const RouterLayout = () => (
  <BrowserRouter>
    <>
      <h1>React Router Examples</h1>
      <Header />
      <hr />
      <Main />
    </>
  </BrowserRouter>
);

export default RouterLayout;

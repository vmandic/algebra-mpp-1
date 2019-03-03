import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/hello">Hello (World)</Link>
        </li>
        <li>
          <Link to="/hello/Jack">Hello (Jack)</Link>
        </li>
        <li>
          <Link to="/hello/Jack/Jackson">Hello (Jack Jackson)</Link>
        </li>
        <li>
          <Link to={"/" + Math.random()}>A 404 page</Link>
        </li>
        <li>
          <Link to="/render-prop-component">Render prop component</Link>
        </li>
        <li>
          <Link to="/children-prop">Children prop route</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

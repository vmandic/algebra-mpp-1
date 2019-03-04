import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import Calculator from "./Calculator";

const AppRoot = () => {
  return (
    <div>
      <h1>Hello React-Redux Example</h1>
      <Calculator />
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
}

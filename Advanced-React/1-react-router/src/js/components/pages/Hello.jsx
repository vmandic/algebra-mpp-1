import React from "react";

const Hello = ({ match }) => {
  return <div>Hello {match.params.name || "World"}!</div>;
};

export default Hello;

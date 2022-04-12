import React from "react";
import "./App.css";
import B from "./B";

class A extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <>
        <B/>
      </>
    );
  }
}

export default A;
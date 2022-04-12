import React from "react";
import "./App.css";
import { User } from "./App";

class D extends React.Component {
  render() {
    return (
      <>
        <User.Consumer>
          {(value) => {
            return (
              <div className="para">
                <p>{value.name}</p>
              </div>
            );
          }}
        </User.Consumer>
      </>
    );
  }
}

export default D;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleClickBind = this.handleClick.bind(this);
  }

  handleClick() {
    if (typeof this === "undefined") {
      console.log("invalid this context");
    } else {
      this.setState((prevState) => {
        return {
          counter: prevState.counter + 1
        };
      });
    }

    //this.state.counter = this.state.counter + 1;

    console.log("counter", this.state.counter);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.handleClickBind}>Increment counter</button>
        <div>Counter value is {counter} </div>
      </div>
    );
  }
}

root.render(
  <StrictMode>
    <Counter />
  </StrictMode>
);

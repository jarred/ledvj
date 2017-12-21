import React, { Component } from "react";
import gradient from "random-gradient";

export default class Gradient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgGradient = { background: gradient(String(Math.random())) };
    return (
      <div className="Gradient">
        <div className="fill" style={bgGradient} />
      </div>
    );
  }
}

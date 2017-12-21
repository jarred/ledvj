import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: 1
    }
  }

  render() {
    return <div>{this.props.children[this.state.scene]}</div>
  }
}

import React, { Component } from "react";
import ClassNames from "classnames";

export default class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrameIndex: 0,
      frames: ["red", "blue", "green", "yellow"]
    };
    this.nextFrame = this.nextFrame.bind(this);
    this.resetScene = this.resetScene.bind(this);
  }

  componentDidMount() {
    this.resetScene();
  }

  componentDidUpdate() {
    this.resetScene();
  }

  nextFrame() {
    if (this.state.currentFrameIndex + 1 > this.state.frames.length - 1) {
      this.setState({
        currentFrameIndex: 0
      });
    } else {
      this.setState({
        currentFrameIndex: this.state.currentFrameIndex + 1
      });
    }
  }

  resetScene() {
    if (this.int) {
      clearInterval(this.int);
    }
    // this.int = setTimeout();
    const bps = this.props.bpm / 60;
    const miliBpm = 1000 / bps;
    const frameBpm = miliBpm / this.state.frames.length;
    // const frameBpm = miliBpm / this.state.frames.length;
    this.int = setInterval(this.nextFrame, frameBpm);
  }

  render() {
    if (!this.props.visible) {
      return null;
    }
    return <div className="Scene">{this.props.children}</div>;
  }
}

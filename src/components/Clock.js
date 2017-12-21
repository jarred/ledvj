import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sceneIndex: 0
    }
  }

  setScene(scene) {
    const newScene = scene % this.props.children.length
    const event = () => this.setState({sceneIndex: newScene})
    this.props.queueEvent(event)
  }

  handleKeyDown(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      // 1-9 only
      this.setScene(event.keyCode - 48)
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
      // 1-9 on the keypad motherfucker, yea, but you don't even have a keypad
      // but when you get one, you'll be happy we have this code here.
      this.setScene(event.keyCode - 96)
    }
  }

  componentDidMount() {
    this.handleKeyDown = this.handleKeyDown.bind(this)
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    return <div>{this.props.children[this.state.sceneIndex]}</div>
  }
}

import React, { Component } from "react";
import BpmCtrl from "./components/BpmCtrl";
import Scene from "./components/Scene";
import Clock from "./components/Clock";
import Gradient from "./components/Gradient";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 120,
      bpmCtrlVisible: false,
      beat: null,
      interval: undefined
    };
    this.keyDown = this.keyDown.bind(this);
    this.updateBpm = this.updateBpm.bind(this);
    this.queueEvent = this.queueEvent.bind(this);
    this.jiveToBeat = this.jiveToBeat.bind(this);
    this.queuedEvents = []
  }

  keyDown(event) {
    if (this.state.bpmCtrlVisible) {
      return;
    }
    switch (event.key) {
      case "b": {
        this.setState({ bpmCtrlVisible: true });
      }
    }
  }

  updateBpm(bpm) {
    this.setState({
      bpmCtrlVisible: false,
      bpm: bpm
    });
    this.setPulse(bpm)
  }

  jiveToBeat() {
    if (this.queuedEvents.length > 0) {
      const events = this.queuedEvents
      const event = events[0]
      event()
      this.queuedEvents = events.slice(1)
    }
  }

  setPulse(bpm) {
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
    const bps = bpm / 60;
    const miliBpm = 1000 / bps;
    const interval = setInterval(
      this.jiveToBeat,
      miliBpm,
      bpm
    );
    this.setState({interval})
  }

  queueEvent(event) {
    const events = this.queuedEvents
    events.push(event)
    this.queuedEvents = events
  }

  componentDidMount() {
    document.body.addEventListener("keydown", this.keyDown);
    this.setPulse(this.state.bpm);
  }

  render() {
    return (
      <div className="App">
        <BpmCtrl
          updateBpm={this.updateBpm}
          visible={this.state.bpmCtrlVisible}
          bpm={this.state.bpm}
        />
        <Clock bpm={this.state.bpm} queueEvent={this.queueEvent}>
          <Scene bpm={this.state.bpm} visible={!this.state.bpmCtrlVisible}>
            <Gradient />
          </Scene>
          <Scene bpm={this.state.bpm} visible={!this.state.bpmCtrlVisible}>
            <Gradient />
          </Scene>
          <Scene bpm={this.state.bpm} visible={!this.state.bpmCtrlVisible}>
            <Gradient />
          </Scene>
          <Scene bpm={this.state.bpm} visible={!this.state.bpmCtrlVisible}>
            <Gradient />
          </Scene>
        </Clock>
      </div>
    );
  }
}

export default App;

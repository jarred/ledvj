import React, { Component } from "react";
import BpmCtrl from "./components/BpmCtrl";
import Scene from "./components/Scene";
import Clock from "./components/Clock"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 120,
      bpmCtrlVisible: false,
      beat: null
    };
    this.keyDown = this.keyDown.bind(this);
    this.updateBpm = this.updateBpm.bind(this);
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

  updateBpm(val) {
    this.setState({
      bpmCtrlVisible: false,
      bpm: val
    });
  }

  setPulse() {
    if (this.int) {
      clearInterval(this.int);
    }
    const bps = this.state.bpm / 60;
    const miliBpm = 1000 / bps;
    this.int = setInterval(
      () => {
        // console.log("doof");
      },
      miliBpm,
      this.state.bpm
    );
  }

  componentDidUpdate() {
    this.setPulse();
  }

  componentDidMount() {
    document.body.addEventListener("keydown", this.keyDown);
    this.setPulse();
  }

  render() {
    return (
      <div className="App">
        <BpmCtrl
          updateBpm={this.updateBpm}
          visible={this.state.bpmCtrlVisible}
          bpm={this.state.bpm}
        />
        <Clock bpm={this.state.bpm}>
          <Scene bpm={this.state.bpm} visible={!this.state.bpmCtrlVisible} />
          <Scene bpm={this.state.bpm} visible={!this.state.bpmCtrlVisible} />
          <Scene bpm={this.state.bpm} visible={!this.state.bpmCtrlVisible} />
          <Scene bpm={this.state.bpm} visible={!this.state.bpmCtrlVisible} />
        </Clock>
      </div>
    );
  }
}

export default App;

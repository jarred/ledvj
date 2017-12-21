import React, { Component } from "react";

export default class BpmCtrl extends Component {
  constructor(props) {
    super(props);
    this.trigger = this.trigger.bind(this);
  }

  componentDidUpdate() {
    if (this.props.visible) {
      this.input.focus();
    }
  }

  trigger(event) {
    console.log(event.key);
    if (event.key === "Enter") {
      this.props.updateBpm(this.input.value);
    }
  }

  render() {
    if (!this.props.visible) {
      return null;
    }
    return (
      <div className="BpmCtrl">
        <input
          type="number"
          onKeyDown={this.trigger}
          ref={el => {
            this.input = el;
          }}
        />
      </div>
    );
  }
}

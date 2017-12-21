import React, { Component } from "react";

export default class GifPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, bpm, length } = this.props;
    const speed = parseInt(length) / 2;
    return (
      <gif-player
        className="gif"
        src={src}
        speed={speed} 
        play
      />
      
    )
  }
}

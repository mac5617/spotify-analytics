import React, { Component } from "react";

export default class track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: props.song,
      artist: props.artist,
      popularity: props.popularity,
    };
  }

  render() {
    return (
      <div className="Track">
        <span>Song: {this.state.song}</span>
        <br />
        <span>Artist: {this.state.artist}</span>
        <br />
        <span>Popularity: {this.state.popularity}</span>
        <br />
      </div>
    );
  }
}

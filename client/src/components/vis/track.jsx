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
      <div>
        <span>Song: {this.state.song}</span>
        <span>Artist: {this.state.artist}</span>
        <span>Popularity: {this.state.popularity}</span>
      </div>
    );
  }
}

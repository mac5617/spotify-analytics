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
        <h4>Song: {this.state.song}</h4>
        <h4>Artist: {this.state.artist}</h4>
        <h4>Popularity: {this.state.popularity}</h4>
      </div>
    );
  }
}

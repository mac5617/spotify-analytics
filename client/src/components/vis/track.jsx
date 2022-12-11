import React, { Component } from "react";
import "../../style/track.css";
export default class track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: props.song,
      artist: props.artist,
      popularity: props.popularity,
      image: props.image,
      link: props.link,
    };
  }

  render() {
    return (
      <div className="Track">
        <a href={`${this.state.link}` } target="_blank" rel="noreferrer">
          <img
            src={`${this.state.image}`}
            alt={`${this.state.song} cover`}
          ></img>
          <div className="song_art">
            <span className="song">{this.state.song}</span>
            <span className="artist">{this.state.artist}</span>
          </div>
          {/* <span className="popularity">{this.state.popularity}</span> */}
        </a>
      </div>
    );
  }
}

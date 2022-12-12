import React, { Component } from "react";
import "../../style/track.css";
export default class track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: props.playlist,
      artist: props.artist,
      image: props.image,
      link: props.link,
    };
  }
  render() {
    return (
      <div className="Playlist">
        <a href={`${this.state.link}` } target="_blank" rel="noreferrer">
          <img
            src={`${this.state.image}`}
            alt={`${this.state.playlist} cover`}
          ></img>
          <div className="playlist_art">
            <span className="song">{this.state.playlist}</span>
            <span className="artist">{this.state.artist}</span>
          </div>
        </a>
      </div>
    );
  }
}

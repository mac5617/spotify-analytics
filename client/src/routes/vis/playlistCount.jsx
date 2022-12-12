import "../../style/genreCount.css";
import React from "react";
import PlayForm from "../../components/vis/play_form";
import PostNav from "../../components/general/post_nav";

export default function GenreCount() {

  return (
    <div>
      <div className="full_container">
        <PostNav />
        <PlayForm />
        <div className="user_request"></div>
        <div>
          <ul id="data"></ul>
        </div>
      </div>
    </div>
  );
}

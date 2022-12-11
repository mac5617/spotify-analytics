import "../../style/genreCount.css";
import React from "react";
import TermForm from "../../components/vis/term_form";
import PostNav from "../../components/general/post_nav";
import BarChart from "../../components/vis/BarChart";
// import { useForm } from "react-hook-form";
export default function GenreCount() {

  return (
    <div>
      <div className="full_container">
        <PostNav />
        <TermForm />
        <div className="user_request"></div>
        <div>
          <ul id="data"></ul>
        </div>
      </div>
    </div>
  );
}

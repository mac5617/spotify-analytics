import "../../style/genreCount.css";
import React from "react";
import TermForm from "../../components/term_form";
// import { useForm } from "react-hook-form";
export default function GenreCount() {
  // check the buttton

  return (
    <div>
      <div className="full_container">
        <div className="user_request"></div>
        <div>
          <ul id="data"></ul>
        </div>
        <TermForm />
      </div>
    </div>
  );
}

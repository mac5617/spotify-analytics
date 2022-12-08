import React from "react";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import Track from "./track";
export default function DataForm() {
  const [term, set_term] = useState("long_term");
  const [trackData, set_trackData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/mod/trackpage?term=${term}`);
      const json = await data.json();
      set_trackData(json);
    };

    fetchData();
    console.log(trackData);
    // eslint-disable-next-line
  }, [term]);
  return (
    <div>
      <Form id="type_request">
        <fieldset>
          <input
            title="All Time top songs"
            type="radio"
            id="long"
            value="long_term"
            name="term"
            onClick={(item) => {
              set_term(item.target.value);
            }}
          />
          <label
            title="All Time top songs"
            htmlFor="long"
            className={`${term === "long_term" ? "bolder" : ""}`}
          >
            long term
          </label>

          <input
            title="top songs in last 6 months"
            type="radio"
            id="medium"
            value="medium_term"
            name="term"
            onClick={(item) => {
              set_term(item.target.value);
            }}
          />
          <label
            title="top songs in last 6 months"
            htmlFor="medium"
            className={`${term === "medium_term" ? "bolder" : ""}`}
          >
            medium term
          </label>
          <input
            title="top songs in last 4 weeks"
            type="radio"
            id="short"
            value="short_term"
            name="term"
            onClick={(item) => {
              set_term(item.target.value);
            }}
          />

          <label
            title="top songs in last 4 weeks"
            htmlFor="short"
            className={`${term === "short_term" ? "bolder" : ""}`}
          >
            Short term
          </label>
        </fieldset>
      </Form>
      <div className="Data">
        {trackData?.map((res, index) => (
          <Track
            key={`${index}:${res.song_name}`}
            className="trackContainer"
            song={res.song_name}
            artist={res.artists.join(', ')}
            popularity={res.popularity}
            image={res.image}
            link={res.link}
          />
        ))}
        ;
      </div>
    </div>
  );
}

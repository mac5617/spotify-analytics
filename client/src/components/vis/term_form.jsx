import React from "react";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
export default function DataForm() {
  const [data_val, set_dataVal] = useState();
  const [fetch_data, set_fetchData] = useState();
  useEffect(() => {
    if (!data_val) {
      set_dataVal("long_term");
      fetch(`/api/mod/tracklist?term=${"long_term"}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          set_fetchData(data);
        });
    } else {
      fetch(`/api/mod/tracklist?term=${data_val}`).then((response) => {
        console.log(response.json());
      });
    }
    return () => {
      console.log("dataReturn");
    };
  }, []);
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
              set_dataVal(item.target.value);
            }}
            checked
          />
          <label
            title="All Time top songs"
            for="long"
            className={`${data_val === "long_term" ? "bolder" : ""}`}
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
              set_dataVal(item.target.value);
            }}
          />
          <label
            title="top songs in last 6 months"
            for="medium"
            className={`${data_val === "medium_term" ? "bolder" : ""}`}
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
              set_dataVal(item.target.value);
            }}
          />

          <label
            title="top songs in last 4 weeks"
            for="short"
            className={`${data_val === "short_term" ? "bolder" : ""}`}
          >
            Short term
          </label>
        </fieldset>
      </Form>
      <div className="Data">
        <pre>{`${JSON.stringify(fetch_data, null, 2)}`}</pre>
      </div>
    </div>
  );
}

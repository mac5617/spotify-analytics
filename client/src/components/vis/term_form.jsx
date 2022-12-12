import React from "react";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import Track from "./track";
import BarChart from "./BarChart";
export default function DataForm() {
  const [term, set_term] = useState("long_term");
  const [trackData, set_trackData] = useState(null);
  const [inputValue, set_inputValue] = useState(null);
  const [ChartData, set_chartData] = useState({
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        label: "Users Gained",
        data: [1, 2, 3, 4],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      set_trackData([]);
      const data = await fetch(`/api/mod/trackpage?term=${term}`);
      const json = await data.json();
      set_trackData(json);

      const genreLookup = {};
      json?.forEach((element) => {
        const { genre } = element;
        if (genre) {
          genre.forEach((item) => {
            if (item in genreLookup) {
              genreLookup[item] += 1;
            } else {
              genreLookup[item] = 1;
            }
          });
        }
      });

      const sortable = Object.entries(genreLookup)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

      set_chartData({
        labels: Object.keys(sortable),
        datasets: [
          {
            label: "Number of songs under genre",
            data: Object.values(sortable),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    };
    fetchData();

    // eslint-disable-next-line
  }, [term]);
  return (
    <div>
      <Form id="type_request">
        <fieldset>
          <input
            className="term"
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
            className="term"
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
            className="term"
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
      {/* <input type="text" className="inputSearch"/> */}
      <div className="Data">
        {trackData?.map((res, index) => (
          <Track
            key={`${index}:${res.song_name}`}
            className="trackContainer"
            song={res.song_name}
            artist={res.artists.join(", ")}
            popularity={res.popularity}
            image={res.image}
            link={res.link}
          />
        ))}
      </div>
      {ChartData ? (
        <BarChart chartData={ChartData} />
      ) : (
        <div>data still loading.....</div>
      )}
    </div>
  );
}

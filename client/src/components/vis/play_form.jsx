import React from "react";
import { useState, useEffect } from "react";
import Playlist from "../vis/playlist";
import BarChart from "./BarChart";

export default function DataForm() {
  const [playData, set_playData] = useState(null);
  const [filteredData, set_filteredData] = useState(null);
  const [inputValue, set_inputValue] = useState("");
  const [ChartData, set_chartData] = useState(null);
  function filterList(list, filterInputValue) {
    console.log("Thedata");
    console.log(list);
    return list.filter((item) => {
      const lowerCaseName = item.toLowerCase();
      const lowerCaseQuery = filterInputValue.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });
  }
  const inputLog = (event) => {
    set_inputValue(event.target.value);
    console.log(playData);
    if (playData) {
      const data_filter = filterList(
        playData.map((item) => item.name),
        inputValue
      );
      console.log("Data Filter");
      console.log(data_filter);
      let temp_data = [];
      playData.forEach((item) => {
        if (data_filter.includes(item.name)) {
          temp_data.push(item);
        }
      });
      console.log(inputValue);
      console.log(temp_data);
      set_filteredData(temp_data);
      set_chartData({
        labels: temp_data.map((item) => {
          return item.name;
        }),
        datasets: [
          {
            label: "Number of songs under playlist",
            data: temp_data.map((item) => {
              return item.total_tracks;
            }),
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
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `/api/artists/albums?id=${"39cDMNnxwjrKJE1dyt47jh"}`
        );
        const json = await data.json();
        console.log(json);
        set_playData(json["items"]);
        set_chartData({
          labels: json["items"].map((item) => {
            return item.name;
          }),
          datasets: [
            {
              label: "Number of songs under playlist",
              data: json["items"].map((item) => {
                return item.total_tracks;
              }),
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
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    // eslint-disable-next-line
  }, []);
  useEffect(() => {}, []);

  return (
    <div>
      <div className="inputBox">
        <label>Filter Data By Name</label>
        <input type="text" className="inputSearch" onChange={inputLog} />
      </div>
      <div className="Data">
        {filteredData
          ? filteredData?.map((res, index) => (
              <Playlist
                key={`${index}:${res.name}`}
                className="playContainer"
                playlist={res.name}
                artist={res.artists
                  .map((item) => {
                    return item.name;
                  })
                  .join(", ")}
                image={res.images[0].url}
                link={res.external_urls.spotify}
              />
            ))
          : playData?.map((res, index) => (
              <Playlist
                key={`${index}:${res.name}`}
                className="playContainer"
                playlist={res.name}
                artist={res.artists
                  .map((item) => {
                    return item.name;
                  })
                  .join(", ")}
                image={res.images[0].url}
                link={res.external_urls.spotify}
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

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // eslint-disable-next-line
  Route,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import GenreCount from "./routes/vis/genreCount";
import PlaylistCount from "./routes/vis/playlistCount"
import Vis from "./components/general/vis.jsx"
import About from "./components/general/about.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/vis",
    element: <Vis />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/vis/genreCount",
    element: <GenreCount />,
  },
  {
    path: "/vis/playlistCount",
    element: <PlaylistCount/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
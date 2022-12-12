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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
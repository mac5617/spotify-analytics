// eslint-disable-next-line
import logo from "./spot_icon.png";
import "../../style/nav.css";
// import { Outlet, Link } from "react-router-dom";
export default function PostNav() {
  return (
    <nav>
      <ul>
        <div className="lDiv">
          <li>{/* <img src={logo} alt="" id="logo" /> */}</li>
          <li>
            <a href="/">Spotify Analytics</a>
          </li>
        </div>
        <div className="rDiv">
          <li>
            <a href="/vis">Visualizations</a>
          </li>
          <li>
            <a
              href="https://github.com/mac5617/spotify-analytics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            {/* <a href="/about">About us</a> */}
          </li>
        </div>
      </ul>
    </nav>
  );
}

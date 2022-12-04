// eslint-disable-next-line
import logo from "./spot_icon.png";
import "../../style/pre_nav.css";
// import { Outlet, Link } from "react-router-dom";
export default function PostNav() {
  return (
    <nav>
      <ul className="container">
        <div className="lDiv">
          <li>{/* <img src={logo} alt="" id="logo" /> */}</li>
          <li>
            <a href="/">Spotify Analytics</a>
          </li>
        </div>
        <div className="rDiv">
          <li>
            <a href="/graphs">Graphs</a>
          </li>
          <li>
            <a href="/maps">Maps</a>
          </li>
          <li>
            <a href="/me">Profile</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

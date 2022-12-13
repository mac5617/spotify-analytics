// eslint-disable-next-line
import logo from "./spot_icon.png";
import "../../style/nav.css";
export default function PreNav() {
  return (
    <nav>
      <ul className="prenav_container">
        <div className="lDiv">
          <li>{/* <img src={logo} alt="" id="logo" /> */}</li>
          <li>
            <a href="/">Spotify Analytics</a>
          </li>
        </div>
        <div className="rDiv">
          <li>
            <a href="https://umd-spotify-analytics.herokuapp.com/api/login">
              Sign-in
            </a>
          </li>
          <li>
            <a href="https://github.com/mac5617/spotify-analytics" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li>
            {/* <a href="/about">About Us</a> */}
          </li>
        </div>
      </ul>
    </nav>
  );
}

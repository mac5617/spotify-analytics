// eslint-disable-next-line
import logo from "./spot_icon.png";
import "../../style/pre_nav.css";
export default function PreNav() {
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
            <a href="https://umd-spotify-analytics.herokuapp.com/login">
              Sign-in
            </a>
          </li>
          <li>
            <a href="https://github.com/mac5617/spotify-analytics">Github</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

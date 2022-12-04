// eslint-disable-next-line
import logo from "./spot_icon.png";
import "../../style/pre_nav.css";
export default function PreNav() {
  return (
    <nav>
      <ul className="cotainer">
        <div className="lDiv">
          <li>{/* <img src={logo} alt="" id="logo" /> */}</li>
          <li>Spotify Analytics</li>
        </div>
        <div className="rDiv">
          <li>Sign-in</li>
          <li>Github</li>
          <li>About Us</li>
        </div>
      </ul>
    </nav>
  );
}

// eslint-disable-next-line
import logo from "./spot_icon.png";
import "../../style/pre_nav.css";
export default function PostNav() {
  return (
    <nav>
      <ul className="cotainer">
        <div className="lDiv">
          <li>{/* <img src={logo} alt="" id="logo" /> */}</li>
          <li>Spotify Analytics</li>
        </div>
        <div className="rDiv">
          <li>Graphs</li>
          <li>Maps</li>
          <li>Profile</li>
        </div>
      </ul>
    </nav>
  );
}

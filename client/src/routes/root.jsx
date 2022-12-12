import "../style/root.css";
import PreNav from "../components/general/pre_nav.jsx";
import logo from "../components/general/spot_icon.png";
export default function Root() {
  return (
    <div>
      <PreNav />
      <div className="root_page">
        <div className="mid_page">
          <div className="left_root">
            <span>Visualize your song data</span>
            <span>Find your top tracks</span>
            <span>Learn about your favorite general</span>
          </div>
          <div className="right_root">
            <img src={logo} alt="" id="logo" />
          </div>
        </div>
        <div className="foot">
            <button>
              <a href="https://umd-spotify-analytics.herokuapp.com/api/login" target="_blank" rel="noopener noreferrer">Sign-in</a>
            </button>
            <button>
              <a href="https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F" target="_blank" rel="noopener noreferrer">Sign-Up</a>
            </button>
          </div>
      </div>
    </div>
  );
}

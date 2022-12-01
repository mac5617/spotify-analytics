

const App = () => {

  return (
    <div>
      <div className="nav">
        <div className="l_nav">
          <a href="/">Spotify Analytics</a>
          <p></p>
        </div>
        <div className="r_nav">
          <a href="http://localhost:9000/api/login">Login</a>
          <a href="/umd_stats">UMD Stats</a>
          <a href="/about_us">About us</a>
        </div>
      </div>
      <div className="quote">
        <p>
          “University of Maryland’s Prime database <br />
          for student song preference”
        </p>
      </div>
      <div className="flex_container">
        <ul className="storing_information">
          Currently Storing:
          <li><span className="effects_1" id="users">50</span> Users</li>
          <li><span className="effects_1" id="songs">2200</span> Songs</li>
          <li><span className="effects_1" id="artists">120</span> Artists</li>
          <li><span className="effects_1" id="genres">32</span> Genres</li>
        </ul>
        <div className="storing_pictures">

        </div>
      </div>
    </div>

  );
};

export default App;

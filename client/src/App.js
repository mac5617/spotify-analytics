import "./App.css";
import PreLogNav from "./components/general/navbar/PreLogNav";
const App = () => {
  return (
    <div>
      <div className="nav">
        <div className="l_nav">
          <a href="/">Spotify Analytics</a>
          <p></p>
        </div>
        <PreLogNav />
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
          <li>
            <span className="effects_1" id="users">
              50
            </span>{" "}
            Users
          </li>
          <li>
            <span className="effects_1" id="songs">
              2200
            </span>{" "}
            Songs
          </li>
          <li>
            <span className="effects_1" id="artists">
              120
            </span>{" "}
            Artists
          </li>
          <li>
            <span className="effects_1" id="genres">
              32
            </span>{" "}
            Genres
          </li>
        </ul>
        <div className="Artist-List">
          <div>
            <div>
              <h4>Name1</h4>
              <img
                src="https://i.scdn.co/image/ab6761610000f178fd30ebd7e80dad6b2383aab0"
                alt=""
              />
            </div>
            <div>
              <h4>Name2</h4>
              <img
                src="https://i.scdn.co/image/ab6761610000f178b7097d4c2bc9751c14695351"
                alt=""
              />
            </div>
            <div>
              <h4>Name3</h4>
              <img
                src="https://i.scdn.co/image/080090a26f6df71cae1925b8b9f76a236b524b18"
                alt=""
              />
            </div>
          </div>
          <div>
            <div>
              <div>
                <h4>Name1</h4>
                <img
                  src="https://i.scdn.co/image/ab6761610000f178fd30ebd7e80dad6b2383aab0"
                  alt=""
                />
              </div>
              <div>
                <h4>Name2</h4>
                <img
                  src="https://i.scdn.co/image/ab6761610000f178b7097d4c2bc9751c14695351"
                  alt=""
                />
              </div>
              <div>
                <h4>Name3</h4>
                <img
                  src="https://i.scdn.co/image/080090a26f6df71cae1925b8b9f76a236b524b18"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h4>Name1</h4>
                <img
                  src="https://i.scdn.co/image/ab6761610000f178fd30ebd7e80dad6b2383aab0"
                  alt=""
                />
              </div>
              <div>
                <h4>Name2</h4>
                <img
                  src="https://i.scdn.co/image/ab6761610000f178b7097d4c2bc9751c14695351"
                  alt=""
                />
              </div>
              <div>
                <h4>Name3</h4>
                <img
                  src="https://i.scdn.co/image/080090a26f6df71cae1925b8b9f76a236b524b18"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

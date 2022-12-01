let express = require("express");
let router = express.Router();
const querystring = require("querystring");

function generateRandomString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const CLIENT_ID = "530e835e3d6b45b5b6e339554a506d43";

const REDIRECT_URI = 'http://localhost:9000/api/callback'
//const REDIRECT_URI = "https://umd-spotify-backend.herokuapp.com/api/callback";
const STATEKEY = "spotify_auth_state";

router.get("/", (req, res) => {
  const STATE = generateRandomString(16);
  const SCOPE =
    "user-read-private user-read-email user-top-read user-follow-read user-library-read playlist-modify-public";

  const queryParams = querystring.stringify({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: SCOPE,
    redirect_uri: REDIRECT_URI,
    state: STATE,
  });
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

module.exports = router;

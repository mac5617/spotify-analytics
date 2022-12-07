let express = require("express");
let router = express.Router();
const querystring = require("querystring");
const axios = require("axios");
const session = require("express-session");

router.get("/", (req, res) => {
  const code = req.query.code || null;
  const REDIRECT_URI = 'http://localhost:5000/api/callback'
  //const REDIRECT_URI = "https://umd-spotify-analytics.herokuapp.com/api/callback";
  const CLIENT_ID = "530e835e3d6b45b5b6e339554a506d43";
  const CLIENT_SECRET = "49667a6fcfbf4533839c5016cfed4b7a";
  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        const session_cookie = response.data;
        const event = new Date();
        session_cookie.exp_time = Date.now() + 3600;
        session_cookie.time_stamp = event.toLocaleString('en-GB', { timeZone: 'EST' });
        req.session.state = session_cookie;
        //console.log(req.session);
        //res.send(`<pre>${JSON.stringify(response.data, null, 2)}</pre>`);
        //res.send(response);
        // res.redirect(
        //   `https://umd-spotify-analytics.herokuapp.com/`
        // );
        res.status(200).send('Successfully logged in')
      } else {
        res.send(response);
      }
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;

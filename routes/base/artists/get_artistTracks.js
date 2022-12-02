let express = require("express");
let router = express.Router();
const axios = require("axios");
// https://umd-spotify-backend.herokuapp.com/artists/tracks?id=0TnOYISbd1XYRBk9myaseg&market_string=ES
/* Get Spotify catalog information about an artist's top tracks by country. */
router.get("/", function (req, res, next) {
  const { id, market_string } = req.query;
  const access_token = req.access_token;
  try {
    axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks`,
      params: { market: market_string },
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (e) {
    res.send(e);
    //res.status(e.status || 500);
    //res.render("error");
  }
});

module.exports = router;

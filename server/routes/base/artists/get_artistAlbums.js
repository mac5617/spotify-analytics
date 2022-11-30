let express = require("express");
let router = express.Router();
const axios = require("axios");
// https://umd-spotify-backend.herokuapp.com/artists/albums?id=0TnOYISbd1XYRBk9myaseg
/* Get Spotify catalog information for a single artist identified by their unique Spotify ID. */
router.get("/", function (req, res, next) {
  const { id, group, limit_int, market_string, offset_int } = req.query;
  const access_token = req.access_token;
  try {
    axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}/albums`,
      params: {
        include_groups: group,
        limit: limit_int,
        market: market_string,
        offset: offset_int,
      },
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

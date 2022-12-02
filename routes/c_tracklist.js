var express = require("express");
var router = express.Router();
const axios = require("axios");
const util = require("../utilities/pull_tracks.js");

/* GET users 50 songs. */
router.get("/", function (req, res, next) {
  // short_term, medium_term, long_term
  const { term, access_token } = req.query;
  try {
    axios({
      method: "get",
      url: "https://api.spotify.com/v1/me/top/tracks",
      params: { limit: 50, offset: 0, time_range: term },
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        let track_info = util.create_tracklist(response.data);
        res.send(track_info);
      })
      .catch((error) => {
        res.send(error);
      })
  } catch (e) {
    res.status(err.status || 500);
    res.render("error");
  }
});

module.exports = router;

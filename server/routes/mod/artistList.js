var express = require("express");
var router = express.Router();
const axios = require("axios");
const util = require("../../utilities/pull_author_id.js");

/* GET users 50 songs. */
router.get("/", function (req, res, next) {
  // short_term, medium-term, long-term
  const { term } = req.query;
  const access_token = req.access_token;
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
        let artist_info = util.pull_artistIDArray(response.data);
        res.send(artist_info);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (e) {
    res.status(err.status || 500);
    res.render("error");
  }
});

module.exports = router;

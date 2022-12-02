var express = require("express");
var router = express.Router();
const axios = require("axios");
const util = require("../../utilities/pull_genres_count.js");

/* GET multiple artists genres */
router.get("/", function (req, res, next) {
  // id : artist ids separated by commas
  const { id_string } = req.query;
  const access_token = req.access_token;
  try {
    axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists`,
      params: { ids: id_string },
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        res.send(util.count_genres(response.data));
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

var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET users 50 songs. */
router.get("/", function (req, res, next) {
  // short_term, medium_term, long_term
  const { access_token } = req.query;
  try {
    axios({
      method: "get",
      url: "https://api.spotify.com/v1/me/episodes",
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
      })
  } catch (e) {
    res.status(err.status || 500);
    res.render("error");
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET single artists information */
router.get("/", function (req, res, next) {
  // id : artist id
  const { id, access_token } = req.query;
  try {
    axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}/albums`,
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
    res.status(err.status || 500);
    res.render("error");
  }
});

module.exports = router;

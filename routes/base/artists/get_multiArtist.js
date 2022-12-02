let express = require("express");
let router = express.Router();
const axios = require("axios");
// https://umd-spotify-backend.herokuapp.com/artists/multi?id=0TnOYISbd1XYRBk9myaseg,2CIMQHirSU0MQqyYHq0eOx
/* Get Spotify catalog information for several artists based on their Spotify IDs. */
router.get("/", function (req, res, next) {
  const { id } = req.query;
  const access_token = req.access_token;
  try {
    axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists`,
      params: { ids: id },
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

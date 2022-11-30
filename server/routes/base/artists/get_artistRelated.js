let express = require("express");
let router = express.Router();
const axios = require("axios");
// https://umd-spotify-backend.herokuapp.com/artists/related?id=0TnOYISbd1XYRBk9myaseg
/* Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history. */
router.get("/", function (req, res, next) {
  const { id } = req.query;
  const access_token = req.access_token;
  try {
    axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}/related-artists`,
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

var express = require("express");
var router = express.Router();
const axios = require("axios");
const util = require("../../utilities/pull_tracks.js");
const retObj = {};
/* GET users 50 songs. */
router.get("/", async function (req, res, next) {
  // short_term, medium-term, long-term
  const { term } = req.query;
  const access_token = req.access_token;
  try {
    const trackData = await axios({
      method: "get",
      url: "https://api.spotify.com/v1/me/top/tracks",
      params: { limit: 50, offset: 0, time_range: term },
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    })
    console.log(trackData.data)
    res.send(util.create_tracklist(trackData.data))
    // pull track ids - Pass in trackData
    // request tracks
    // pull return data - pass in trackData and track data





      // .then((response) => {
      //   let artist_info = util.pull_artistIDArray(response.data);
      //   res.send(artist_info);
      // })
      // .catch((error) => {
      //   res.send(error);
      // });
  } catch (e) {
    res.status(e.status || 500);
    res.render("error");
  }
});

module.exports = router;

/*
{
{
    song_name:name, - Top user tracks
    artist_name:[artist1,artist2,artist3], - Top user tracks
    song_picture: link, - song lookup
    popularity:score, - Top user tracks
},
{
    song_name:name,
    artist_name:[artist1,artist2,artist3],
    song_picture: link,
    popularity:score,
},
{
    song_name:name,
    artist_name:[artist1,artist2,artist3],
    song_picture: link,
    popularity:score,
}



}




*/

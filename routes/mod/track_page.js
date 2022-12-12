var express = require("express");
var router = express.Router();
const axios = require("axios");
const util = require("../../utilities/pull_tracks.js");
const uti = require("../../utilities/pull_author_id");
const retObj = {};
/* GET users 50 songs. */
router.get("/", function (req, res, next) {
  // short_term, medium-term, long-term
  const { term } = req.query;
  const access_token = req.access_token;
  const getTracks = async () => {
    try {
      const trackData = await axios({
        method: "get",
        url: "https://api.spotify.com/v1/me/top/tracks",
        params: { limit: 50, offset: 0, time_range: term },
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });
      return await trackData.data;
    } catch (e) {
      res.status(e.status || 500);
      res.render("error");
    }
  };
  const getAuthors = async (idList) => {
    try {
      const artlist = await axios({
        method: "get",
        url: `https://api.spotify.com/v1/artists`,
        params: { ids: idList },
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      });
      return await artlist.data;
    } catch (e) {
      console.log(e)
    }
  };
  const main = async () => {
    const myData = await getTracks();
    const artString = uti.pull_artistIDArray(myData);
    const authorInfo1 = await getAuthors(artString[0].toString());
    const authorInfo2 = await getAuthors(artString[1].toString());
    const authorFinal = authorInfo1['artists'].concat(authorInfo2['artists'])
    const final = util.create_tracklist(myData, authorFinal);
    res.send(final);
  };
  main()
});

module.exports = router;

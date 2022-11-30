let express = require("express");
let router = express.Router();
const axios = require("axios");
// https://umd-spotify-backend.herokuapp.com/album/multi?id_string=39cDMNnxwjrKJE1dyt47jh,1aBDI4nH6OfAkNyUX08O2V&access_token=
/* Get Spotify catalog information for multiple albums identified by their Spotify IDs. */
router.get("/", function (req, res, next) {
    // id_string : multiple artist ids seperated by commas, market: country code
    const { id_string, market_string } = req.query;
    const access_token = req.access_token;
    try {
        axios({
            method: "get",
            url: `https://api.spotify.com/v1/albums`,
            params: { ids: id_string, market: market_string },
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

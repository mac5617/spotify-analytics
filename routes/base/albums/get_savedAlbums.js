let express = require("express");
let router = express.Router();
const axios = require("axios");
// https://umd-spotify-backend.herokuapp.com/album/get_user?limit_int=50&market_string=ES&offset_int=0&access_token=
/* Get a list of the albums saved in the current Spotify user's 'Your Music' library. */
router.get("/", function (req, res, next) {
    // limit_int: 1 - 50(Number of tracks returned), market_string: Country code, offset_int: int value for albums with more than 50 albums
    const { limit_int, market_string, offset_int } = req.query;
    const access_token = req.access_token;
    try {
        axios({
            method: "get",
            url: `https://api.spotify.com/v1/me/albums`,
            params: { limit: limit_int, market: market_string, offset: offset_int },
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

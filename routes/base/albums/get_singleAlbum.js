let express = require("express");
let router = express.Router();
const axios = require("axios");
// https://umd-spotify-backend.herokuapp.com/album/single?id=4aawyAB9vmqN3uQ7FjRGTy&access_token=
/* Get Spotify catalog information for a single album. */
router.get("/", function (req, res, next) {
    // id : artist id, market: country code
    const { market_string, id } = req.query;
    const access_token = req.access_token;
    try {
        axios({
            method: "get",
            url: `https://api.spotify.com/v1/albums/${id}`,
            params: { market: market_string },
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

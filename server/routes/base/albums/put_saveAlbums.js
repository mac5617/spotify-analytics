const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
let router = express.Router();
// https://umd-spotify-backend.herokuapp.com/album/save_album?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc
/* Save one or more albums to the current user's 'Your Music' library. */
router.post("/", function (req, res, next) {
    // ids: A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
    const { album_strings } = req.query;
    const access_token = req.access_token;
    const album_array = req.body.album;
    try {
        axios({
            method: "put",
            url: `https://api.spotify.com/v1/me/albums`,
            params: { ids: album_strings },
            data: { ids: album_array },
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

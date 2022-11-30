let express = require("express");
let router = express.Router();
const axios = require("axios");
// https://umd-spotify-backend.herokuapp.com/album/contains?album_strings=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&access_token=
/* Check if one or more albums is already saved in the current Spotify user's 'Your Music' library. */
router.get("/", function (req, res, next) {
    // ids: A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
    const { album_strings } = req.query;
    const access_token = req.access_token;
    try {
        axios({
            method: "get",
            url: `https://api.spotify.com/v1/me/albums/contains`,
            params: { ids: album_strings },
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

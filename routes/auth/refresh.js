var express = require('express');
var router = express.Router();
const axios = require("axios");
const querystring = require("querystring");

const CLIENT_ID = "530e835e3d6b45b5b6e339554a506d43";
const CLIENT_SECRET = "49667a6fcfbf4533839c5016cfed4b7a";
/* GET home page. */
router.use("/", function (req, res, next) {
    console.log('Reached MiddleWare')
    const { refresh_token, exp_time } = req.session.state;
    console.log(Date.now() > exp_time)
    console.log('Now', Date.now())
    console.log('After', exp_time)
    if (Date.now() > exp_time) {
        console.log('Passing to next')
        req.access_token = req.session.state.access_token
        next()
    } else {
        console.log('Running Refresh')
        axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            data: querystring.stringify({
                grant_type: 'refresh_token',
                refresh_token: refresh_token
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
            },
        })
            .then(response => {
                const event = new Date();
                req.session.state.access_token = response.data.access_token
                req.session.state.exp_time = Date.now() + 3600;
                req.session.state.time_stamp = event.toLocaleString('en-GB', { timeZone: 'EST' });
                req.access_token = req.session.state.access_token
                next()
            })
            .catch(error => {
                res.send(error);

            });
    }
});
module.exports = router;

const axios = require("axios");
const querystring = require('querystring');
const CLIENT_ID = '530e835e3d6b45b5b6e339554a506d43';
const CLIENT_SECRET = '49667a6fcfbf4533839c5016cfed4b7a';

const refreshToken = (refresh_token) => {
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
            return response.data
        })
        .catch(error => {
            return error
        });
}

module.exports = { refreshToken };
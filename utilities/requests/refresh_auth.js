const axios = require("axios");
const querystring = require("querystring");


const refreshToken = (refresh_token) => {
  return axios({
    method: "get",
    url: "https://accounts.spotify.com/api/token",
    data: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error;
    });
};

module.exports = { refreshToken };

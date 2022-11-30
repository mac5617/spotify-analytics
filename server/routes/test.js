var express = require("express");
var router = express.Router();
;
router.get("/", function (req, res, next) {
    console.log(req.session)
    //res.status(200).json({ msg: `successfully Hit endpoint ${req.state}` })
    if (req.access_token) {
        console.log(`success! access_token is ${req.access_token}`)
    }
    res.send(`<pre>${JSON.stringify(req.session.state, null, 2)}</pre>`);
});

module.exports = router;

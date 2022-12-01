var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log(req.session);
  let sess_time = req.session.state.time_stamp
  let sess_exp_time = req.session.state.time_stamp + 3600
  //res.status(200).json({ msg: `successfully Hit endpoint ${req.state}` })
  if (req.access_token && sess_time > sess_exp_time) {
    console.log(`Token is up to date`);
  }
  const event = new Date();
  time_stamp = event.toLocaleString("en-GB", { timeZone: "EST" });
  res.send(`<pre>${JSON.stringify(req.session.state, null, 2)}</pre>
    </br><h1>Page last loaded at: ${time_stamp}</h1>`);
});

module.exports = router;

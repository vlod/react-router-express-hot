var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('nodejs: respond with a list of users');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  var isProduction = (req.app.get('env') === 'production');
  var params = _.merge({title: 'Testing 123', isProduction:isProduction},
                        req.app.resourcesManifest);
  res.render('index', params)
});

module.exports = router;

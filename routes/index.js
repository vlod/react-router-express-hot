/* eslint-disable new-cap */

const express = require('express');
const router = express.Router();
const _ = require('lodash');

/* GET home page. */
router.get('/', (req, res /* , next*/) => {
  const isProduction = (req.app.get('env') === 'production');
  const params = _.merge({ title: 'Testing 123', isProduction },
                        req.app.resourcesManifest);
  res.render('index', params);
});

module.exports = router;

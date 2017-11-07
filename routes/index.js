var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Autobat(tm) Tools', strap: 'Salesforce Configuration Comparison Tool' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* Report status */
router.get('/', function(req, res, next) {
  res.send('Available');
});

module.exports = router;

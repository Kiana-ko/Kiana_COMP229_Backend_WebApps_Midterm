
var express = require('express');
var router = express.Router();

//For getting the home page:
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;

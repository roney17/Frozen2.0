var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/choose', function(req, res, next) {
  res.render('choose', { title: 'Choose' });
});

module.exports = router;

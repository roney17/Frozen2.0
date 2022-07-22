var express = require('express');
var router = express.Router();

/* GET frozen page. */
router.get('/frozen', function(req, res, next) {
  res.render('frozen', { title: 'Frozen2.0' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

/* GET bluey page. */
router.get('/bluey', function(req, res, next) {
  res.render('bluey', { title: 'bluey' });
});

module.exports = router;

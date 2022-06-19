const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/singup', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('index');
});

router.get('/aboutus', function(req, res, next) {
  res.render('index');
});



module.exports = router;

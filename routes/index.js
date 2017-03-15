var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/todo', function(req, res, next) {
  res.sendfile('public/todo.html');
});

router.get('/hello', function(req, res, next) {
    res.sendfile('public/hello.html');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/todo', function(req, res, next) {
  var todosarr = { todos: [
      {todo: 'CS 429 Assignment', done: false, index: 1},
      {todo: 'Tuesday Trip', done: false, index: 2},
      {todo: 'Dominion Game Night', done: false, index: 3},
  ]};
  res.json(todosarr);
});

module.exports = router;

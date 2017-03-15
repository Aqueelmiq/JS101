var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/todos', function(req, res, next) {
    res.json({
        todos: [
            {todo: 'CS 429 Assignment', done: false, index: 1},
            {todo: 'Tuesday Trip', done: false, index: 2},
            {todo: 'Dominion Game Night', done: false, index: 3}
        ],
    });
});

router.post('/todos', function(req, res, next) {
    res.json({
        todos: [
            {todo: 'CS 429 Assignment', done: false, index: 1},
            {todo: 'Tuesday Trip', done: false, index: 2},
            {todo: 'Dominion Game Night', done: false, index: 3}
        ],
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var query = require("../mysql")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/api/all', function(req, res, next) {
    query("select * from fanss", function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: "err" })
        }
        res.json({ code: 1, msg: "success", data: result })
    })
});

module.exports = router;
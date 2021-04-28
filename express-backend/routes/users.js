var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
    id:1,
    username: "SamSmith"
  },
{
  id: 2,
  username: "LoganEmm"
},
{
  id: 3,
  username: "Sam Rockwell"
}
  ]);
});

module.exports = router;

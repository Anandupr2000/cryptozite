var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/body', { title: 'Express' });
});
router.get('/json',(req,res)=>{
  res.json([{"response":true}])
})
module.exports = router;

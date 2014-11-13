var express = require('express');
var router = express.Router();


var temp_db = [
	{name:"john"},
	{name:"kyle"},
	{name:"max"}
];
/* GET home page. */
router.get('/', function(req, res) {
  res.end("welcome to the api \n api/users/2 \n"+temp_db.toString());
});
router.get('/users/:id',function(req,res){
  if(req.params.id<temp_db.length){
    res.json(temp_db[req.params.id]);
  }else{
    res.end("error user does not exist");
  }
});

module.exports = router;

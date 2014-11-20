var express = require('express');
var url = require('url');
var router = express.Router();


var t_db = [
	{name:"john",age:"5"},
	{name:"kyle",age:"10"},
	{name:"max",age:"15"},
	{name:"mark",age:"10"},
	{name:"alex",age:"1"},
	{name:"thomas",age:"100"}
];

router.get('/', function(req, res) {
  res.end("welcome to the api \n /api/users/name/2 \n"+t_db.toString());
});

var msg_exist = "Does not exist";


var type_db = ["age","name"];
for(i=0;i<type_db.length;i++){
  var urlget = "/users/"+type_db[i]+"/:id";
  router.get(urlget,function(req,res){
    var id = req.params.id;
    var url_parts = url.parse(req.url,true);
    var type_array = url_parts.path.split("/");
    var type = type_array[2];
    if(id<t_db.length&&id>=0){
      res.json(t_db[id][type]);
    }else{
      res.end(msg_exist);
    }
  });
}


module.exports = router;

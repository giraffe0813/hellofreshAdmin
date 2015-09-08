var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('user');
//  res.setHeader('Access-Control-Allow-Origin', '*');
  collection.find({},function(err,doc){
    if(err){
      res.send(false);
    }else{
      res.send(doc);
    }
  })
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  var userId = req.query.id;
  var db = req.db;
  var collection = db.get('user');
  res.setHeader('Access-Control-Allow-Origin', '*');
  collection.remove({"_id" : userId},function(err, removed){
    if (err) throw err;
   if(removed > 0){
     collection.find({},function(err,doc){
       res.send(doc);
     })
   }else{
     res.send(false);
   }
  })
});

module.exports = router;

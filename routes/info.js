exports.list = function(req, res){
  var MongoClient = require('mongodb').MongoClient,
      MondoUrl = 'mongodb://localhost:27017/landing';
  MongoClient.connect(MondoUrl, function(err, db) {
    if (err) {
      console.log('err');
      throw err;
      
    }
    var connection;
    if (req.query.lang === undefined || req.query.lang == "en"){
      connection = 'en'
    } else {
      connection = 'ru'
    }
    db.collection(connection).find().toArray(function(err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });  

};
var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient; 


router.get('/', function (req, res, next) {
 const uri = TUA_STRINGA_DI_CONNESSIONE
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 client.connect(err => {
 const collection = client.db("sample_mflix").collection("movies"); 


 collection.find().limit(10).toArray((err, result) => {
    if (err) console.log(err.message); 
    else console.log(result);
        client.close(); 
    }); 
 });
 res.send('respond with a resource');
});
module.exports = router;
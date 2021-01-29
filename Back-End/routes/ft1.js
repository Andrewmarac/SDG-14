var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient; 


router.get('/', function (req, res, next) {
 const uri = "mongodb+srv://andrewjm:andrewko08@cluster0.glqtn.mongodb.net/Cluster0?retryWrites=true&w=majority";
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 client.connect(err => {
 const collection = client.db("Goal14_DB").collection("target14_1"); 


 collection.find().limit(10).toArray((err, result) => {
    if (err) console.log(err.message); 
    else console.log(result);
        client.close(); 
    }); 
 });
 res.send('respond with a resource');
});
module.exports = router;
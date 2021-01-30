var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient; 
const uri = "mongodb+srv://andrewjm:andrewko08@cluster0.glqtn.mongodb.net/test";

router.get('/', function (req, res, next) {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(getft1Data);

        function getft1Data(err){
            if(err) console.log("Conessione al db non riuscita");
            else{
                const collection = client.db("Goal14_DB").collection("target14_3");
                collection.find().toArray(callBackQuery);
            }

        }
        function callBackQuery(err, result){
            if(err) console.log(err,messagge);
            else res.send(result);
            client.close();
        }
    });
module.exports = router;
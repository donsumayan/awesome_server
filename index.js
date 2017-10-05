var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var f = require('util').format;

var user = encodeURIComponent('awesome_db');
var password = encodeURIComponent(process.env.awesome_mongo_pass);

var url = `mongodb://${user}:${password}@35.162.3.63:27017/awesome_db?authMechanism=DEFAULT`;

MongoClient.connect(url, function(err, db) {
    if(err){
        res.json(err)
    } else {
        console.log('connected');
        MongoDB = db;
    }

    var collection = db.collection('resume');

    app.get('/visit', function (req,res) {
        collection.findOneAndUpdate({key:'visits'}, {$inc:{count:1}, $currentDate:{lastModified:true}}, {upsert:true, });
        res.end();
    })

    app.get('/visit/reset', function (req,res) {
        collection.findOneAndUpdate({key:'visits'}, {$set:{count:0}}, {upsert:true, });
        res.end();
    })

    app.get('/visit/all', function (req,res) {
        collection.findOne({key:'visits'}).then(doc =>{
            res.json(doc)
        })
    })


    app.listen(3000, function () {
      console.log('=> awesome_api active on port', 3000);
    });
});


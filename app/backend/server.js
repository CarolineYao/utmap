const express = require('express');
const app = express();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

/* Initial data to populate the database */
var userData = require('./data/users');
var locationData = require('./data/locations');

// Express doesn't support url-encoded body; Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var config = require('./config/db.js');
var url = config.url;
var port = config.port;

MongoClient.connect(url, function(err, client){
    var db = client.db('utmap');
    assert.equal(null, err);
    assert.ok(db!=null);

    /* Populate the database if it is empty */
    db.collection('users').count(function(err, count) {
        if (!err && count == 0) {
            db.collection('users').insertMany(userData);
        }
    });
    db.collection('locations').count(function(err, count) {
        if (!err && count == 0) {
            db.collection('locations').insertMany(locationData);
        }
    });
});

var routes = require('./routes/routes');
routes(app);

app.listen(port, () => {
    console.log('We are live on ' + port);
});
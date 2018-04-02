const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

// google maps node client
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDIO0xcN6Qj9IFwv-KPcNOgC4xWexH48Lk'
})

var passwordHash = require('password-hash');
var request = require('request');
var config = require('../config/db.js');
var url = config.url;
var port = config.port;
var db; /* utmap database */
var colL; /* "locations" collection */
var colU; /* "users" collection */

/* Connect to database */
MongoClient.connect(url, function(err, client) {
    db = client.db('utmap');
    colL = db.collection('locations');
    colU = db.collection('users');
})


function getSortedCollection(req, callback) {
    request.get(req, function (err, res, body) {
        if (err) {
            console.log(err);
            res.status(500); throw err;
        } else {
            data = JSON.parse(body);
            var res = data.results;
            callback(res);
        }
    })
}

function locations_closest(req, res) {
    var upper = req.query.abb.toUpperCase();
    var final;
    colL.find({abb: upper}).toArray(function(err, info){
        console.log(info);
        if (err) {res.status(500); throw err;}
        var lat = JSON.stringify(info[0].latitude);
        var log = JSON.stringify(info[0].longitude);
        var loc = lat.concat(",", log);
        var firstPart = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
        var secondPart = "&rankby=distance&types=library&key=AIzaSyDIO0xcN6Qj9IFwv-KPcNOgC4xWexH48Lk";
        final = firstPart.concat(loc, secondPart);
        getSortedCollection(final, function(array){
            // console.log("Total items in collection ",array.length);
            // console.log("First item in collection ",array);
            var arr = array.slice(0,4);
            console.log("Total items in collection ",arr.length);
            var data = {
                name: info[0].name,
                lat : info[0].latitude,
                lng : info[0].longtitude,
                firstName: arr[0].name,
                firstLat : arr[0].geometry.location.lat,
                firstLog : arr[0].geometry.location.lng,
                secondName: arr[1].name,
                secondLat : arr[1].geometry.location.lat,
                secondLog : arr[1].geometry.location.lng,
                thirdName: arr[2].name,
                thirdLat : arr[2].geometry.location.lat,
                thirdLog : arr[2].geometry.location.lng,
                fourthName: arr[3].name,
                fourthLat : arr[3].geometry.location.lat,
                fourthLog : arr[3].geometry.location.lng
            }
            console.log("okok");
            res.send(data);
        });
    })
}


/* return password of this user*/
function users_get(req, res) {
    colU.find({User_name: req.query.username}).toArray(function(err, info){
        var hashedPassword = passwordHash.generate(JSON.stringify(req.query.password));
        if (err) {res.status(500); throw err;}
        else if (info[0].password == hashedPassword){ //password correct
            res.status(200).send(info[0].fav);
        } else { //invalid password or username
            res.status(400).send("<h1>Password of username is invalid</h1>")
        }
    })
}
/* create a new account with username, password, favorite place(optional)*/
function users_post(req, res) {
    var data = {
        User_name: req.query.username,
        Password: passwordHash.generate(JSON.stringify(req.query.password)),
        fav: req.query.fav};
    colU.findOne({User_name: req.query.username}, function(err, exist){
        if (err) {
            res.status(500);
            throw err;
        } else if (exist){
            res.status(400).send('<h1>username already exist</h1>');
        } else {
            colU.insertOne(data, function(err, result){
                if (err) { 
                    res.status(500);
                    throw err;
                } else{
                    res.status(200).send('<h1>User Created<h1>');
                }
            });
        }
    });
}

/* return favorite place of this user*/
function fav_get(req, res) {
    colU.find({User_name: req.query.username}).toArray(function(err, info){
        if (err) {res.status(500); throw err;}
        res.status(200).send(info[0].fav);
    });
}
/* update favorite place of this user even if fav originally is null*/
function fav_put(req, res){
    var favorite = req.query.fav.toUpperCase();
    colL.findOne({abb: favorite}, function(err, exist){
        if (err) {
            res.status(500);
            throw err;
        } else if (!exist){
            res.status(400).send('<h1>invalid place</h1>');
        } else {
            colU.update({User_name: req.query.username}, {$set: {fav: favorite}});
            res.status(200).send('<h1>place added</h1>');
        }
    });
}
/* delete the favorite place of this user */
function fav_delete(req, res){
    colL.find({User_name: req.query.username}, {fav: 0}, function(err, exist){
        if (err) {
            res.status(500);
            throw err;
        } else if (!exist){
            res.status(400).send('<h1>invalid place</h1>');
        } else {
            colU.update({User_name: req.query.username}, {$set: {fav: null}});
            res.status(200).send('<h1>place deleted</h1>');
        }
    });
}
/* All Routes */
module.exports = function(app, db) {
    /* routes for /locations */
    // app.route('/locations')
    //     .get(locations_get);
    /* routes for /locations_closest */
    app.route('/locations')
        .get(locations_closest);
    /* routes for /users */
    app.route('/users')
        .post(users_post);
    /* routes for /favorites */
    app.route('/favorites')
        .get(fav_get)
        .put(fav_put)
        .delete(fav_delete);
    /* routes for /login */
    app.route('/login')
        .get(users_get)
};

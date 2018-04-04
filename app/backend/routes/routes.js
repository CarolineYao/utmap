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
            console.log("Total items in collection ",arr);
            var data = {
                name: info[0].name,
                lat : info[0].latitude,
                lng : info[0].longitude,
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
            console.log(data.name);
            res.send(data);
        });
    })
}


/* return password of this user*/
function users_get(req, res) {
    colU.find({User_name: req.query.username}).toArray(function(err, info){
        var hashedPassword = JSON.stringify(req.query.password);
        if (err) {res.status(500); throw err;}
        else if (passwordHash.verify(hashedPassword, info[0].Password)){ //password correct
            console.log("User signed in");
            // var data = {
            //     fav : "BA"
            // }
            // res.status(200).send(data);
            var upper = info[0].fav;
            if(upper == null){
                var data = {
                    favName: ' Nothing yet ',
                    favLat: 43.659724, 
                    favLng: -79.396774,
                }
                res.send(data);
            
            }else{
                colL.find({abb: upper}).toArray(function(err, result) {
                    var data = {
                        favName: result[0].name,
                        favLat: result[0].latitude,
                        favLng: result[0].longitude
                    }
                    res.send(data);
                })
        }
        } else { //invalid password or username
            console.log("Password invalid");
            res.status(400).send("password of username is invalid")
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
            console.log("User already exist:" + data.User_name);
            res.status(400).send('<h1>username already exist</h1>');
        } else {
            colU.insertOne(data, function(err, result){
                console.log('User successfully created');
                res.status(200).send('no worry');
            });
        }
    });
}

/* update favorite place of this user even if fav originally is null*/
function fav_put(req, res){
    var favorite = req.query.fav.toUpperCase();
    colL.findOne({abb: favorite}, function(err, info){
        if (err) {
            res.status(500);
            throw err;
        } else if (!info){
            res.status(400).send('<h1>invalid place</h1>');
        } else {
            colU.update({User_name: req.query.username}, {$set: {fav: favorite}});
            console.log("fav place for: "+req.query.username+" is " + favorite);
        }
    });
    colL.find({abb: favorite}).toArray(function(err, result) {
        var data = {
            favName: result[0].name,
            favLat: result[0].latitude,
            favLng: result[0].longitude
        }
        res.status(200).send(data);
    })
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
        .post(users_post)
        .get(users_get)
        .put(fav_put)
        .delete(fav_delete);
};

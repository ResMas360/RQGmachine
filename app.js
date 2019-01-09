//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");

const app = express();

app.set('view engine', 'ejs');

function initialize(){
    var options = {
        url: 'https://frinkiac.com/api/random',
        headers: {
            'User-Agent': 'request'
        }
    };
    return new Promise(function(resolve, reject) {
        request.get(options, function(err, resp, body){
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

app.get("/", function(req, res){
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        res.render("index", {kindOfEpisode: userDetails.Episode.Key, kindOfStartTime: userDetails.Subtitles[0].StartTimestamp, KindofEndTime: userDetails.Subtitles[2].EndTimestamp});
        //res.render("user", {kindOfEmail: userDetails.bio});
        //console.log(userDetails)
        //console.log(userDetails.login);
    }, function(err){
        console.log(err);
    })
});

app.listen(3000, function(){
    console.log("Server starting on port :3000")
});
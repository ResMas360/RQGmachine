//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");

const app = express();

app.set('view engine', 'ejs');

// Requesting the JSON from the URL endpoint 
// as a PROMISE and then parsing the BODY of the RESOLVE to get 
// JSON values that will form the gif
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

// initialize the server on PORT 3000
app.get("/", function(req, res){
    //Setting up a variable that contains the "result" from the
    //initialize FUNCTION
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        episodeDetails = result;
        console.log("Getting episode details for the RQG machine");
        // passing JSON info to variables used in the index.ejs VIEW
        res.render("index", {episodeTitle: episodeDetails.Episode.Title, kindOfEpisode: episodeDetails.Episode.Key, kindOfStartTime: episodeDetails.Subtitles[0].StartTimestamp, KindofEndTime: episodeDetails.Subtitles[2].EndTimestamp, firstSubtitle: episodeDetails.Subtitles[0].Content, secondSubtitle: episodeDetails.Subtitles[1].Content, thirdSubtitle: episodeDetails.Subtitles[2].Content});
    }, function(err){
        console.log(err);
    })
});

app.listen(3000, function(){
    console.log("Server starting on port :3000")
});
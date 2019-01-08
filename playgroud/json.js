const fs = require('fs');
var getJSON = require('get-json')

var originalJson = getJSON('https://frinkiac.com/api/random', function(error, response){
    console.log(response.Episode.Key);
    console.log(response.Subtitles[0].StartTimestamp);
    console.log(response.Subtitles[2].EndTimestamp);
});

var episObj = JSON.parse(originalJson);
//console.log(typeof episObj);
console.log(episObj.Subtitles[0].StartTimestamp);
console.log(episObj.Subtitles[2].EndTimestamp);
//console.log(episode);
//console.log(startTime);
//console.log(endTime);
console.log(episObj.Episode.Key);
//var episode = episObj.Episode.Key;
//var startTime = episObj.Subtitles[0].StartTimestamp;
//var endTime = episObj.Subtitles[2].EndTimestamp;
//console.log(episode + startTime + endTime);
//console.log("https://frinkiac.com/gif/"+episode+"/"+startTime+"/"+endTime+".gif?b64lines=");

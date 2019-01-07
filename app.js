//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Declare variables
var fs = require('fs'),
    obj

// Read the file and send to the callback
fs.readFile('https://frinkiac.com/api/random', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    // You can now play with your datas
}

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended :true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString("en-US", options);

 

    res.render("index", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server starting on port :3000")
});
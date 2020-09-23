const express = require('express');

const https = require('https');


const app = express();

app.get('/', function (req, res) {
    res.send("<h1>World hello again</h1>");
});


app.listen(3000, function() {
    console.log("Server started in port 3000")
});
const express = require('express');

var bodyParser = require('body-parser')
 
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/', function (req, res) {

  var weight = parseFloat(req.body.w);
  var height = parseFloat(req.body.h);

  var bmi = weight / (height * height);

    res.send("Result of calc is " + bmi);
});

app.listen(3000, function() {
    console.log("Server started in port 3000")
});
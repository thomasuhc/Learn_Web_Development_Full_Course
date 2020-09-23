const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("<h1>World hello again</h1>");
});

app.get('/contact', function (req, res) {
    res.send("Contact me, ok , bye!!!!");
});

app.get('/about', function (req, res) {
    res.send("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
});

app.get('/hobbies', function (req, res) {
    res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
});




app.listen(3000, function() {
    console.log("Server started in port 3000")
});
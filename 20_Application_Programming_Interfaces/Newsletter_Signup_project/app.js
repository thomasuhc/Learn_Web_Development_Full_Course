const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');
const https = require('https');
const { url } = require('inspector');
const { response } = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));


app.use(express.static("public"));

app.get('/', function (req, res) {

    res.sendFile(__dirname + "/signup.html");

});


app.post('/', function (req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us2.api.mailchimp.com/3.0/lists/43c9797e27"

    const Options = {
        method: "POST",
        auth: "Miau:731e0df603c0f494559237896d6b8483-us2"
    }

    const request = https.request(url, Options, function(response) {

        if (response.statusCode ===200) {
            res.sendFile(__dirname + "/sucess.html");

        } else {
            res.sendFile(__dirname + "/failure.html");

        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })

    })

    request.write(jsonData);
    request.end();

});

app.post('/failure', function (req, res) {
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("Server started in port 3000")
});
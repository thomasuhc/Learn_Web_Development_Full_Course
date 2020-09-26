const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.strictEqual(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db, function() {
    client.close();
  });
});


const insertDocuments = function(db, callback) {

    const collection = db.collection('fruits');

    collection.insertMany ([
        {
            name: "Apple",
            score: 10,
            review: "Great fruit"
        }, 
        {
            name: "Orange",
            score: 7,
            review: "More or less"
        }, 
        {
            name: "Banana",
            score: 5,
            review: "I dont like"
        }

    ], function(err, result) {
        assert.strictEqual(err, null);
        assert.strictEqual(3, result.result.n);
        assert.strictEqual(3, result.ops.length);
        console.log("Insert 3 document into the collections");
        callback(result);
    });
}

const findDocuments = function(db, callback) {

    const collection = db.collection('fruits');

    collection.find({}).toArray(function(err, fruits) {
        assert.strictEqual(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
}
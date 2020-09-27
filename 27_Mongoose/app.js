
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({

    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({

    name: "Apple",
    score: 10,
    review: "Great fruit"

});

fruit.save();

const personSchema = new mongoose.Schema ({

    name: String,
    age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({

    name: "Angela",
    age: 20,

});

person.save();

const lemon = new Fruit ({

    name: "Lemon",
    score: 6,
    review: "Lemon Juice"

});

const orange = new Fruit ({

    name: "Orange",
    score: 8,
    review: "sometimes yes"

});

const banana = new Fruit ({

    name: "Banana",
    score: 5,
    review: "I dont like"

});

Fruit.insertMany([lemon, orange, banana], function(err){

    if(err){
        console.log(err);
    } else {
        console.log("All saved in fruitDb");
    }
});





const findDocuments = function(db, callback) {

    const collection = db.collection('fruits');

    collection.find({}).toArray(function(err, fruits) {
        assert.strictEqual(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
}
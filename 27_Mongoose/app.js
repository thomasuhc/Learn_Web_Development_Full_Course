
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: [true, "Check your data"]
    },
    score: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({

    name: "Melon",
    score: 5,
    review: "Very sweet"

});
 
//fruit.save(); */

const personSchema = new mongoose.Schema ({

    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const durian = new Fruit ({

    name: "Durian",
    score: 6,
    review: "I love Durian fruit !!!"

});

//durian.save();


Person.updateOne({name: "Angela"}, {favouriteFruit: durian}, function(err){

    if(err){
        console.log(err);
    } else {
        console.log("add angela fruit");
    }

});

const cherries = new Fruit({
    name: "Cherries",
    age: 25,
    review: "I hate Cherries hahahahah"
    
})

const person = new Person ({

    name: "Aline",
    age: 20,
    favouriteFruit: cherries

});

const person = new Person ({

    name: "Angela",
    age: 20,

});

//person.save();

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

}); */


Fruit.insertMany([lemon, orange, banana], function(err){

    if(err){
        console.log(err);
    } else {
        console.log("All saved in fruitDb");
    }
}); */


Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    } else {

        mongoose.connection.close();

        console.log(fruits);

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});


Fruit.updateOne({_id: "5f6ffe896f452837cc8adeae"}, {name: "Manga"}, function(err){

    if(err){
        console.log(err);
    } else {
        console.log("Add Manga");
    }

})


Fruit.deleteOne({id: "5f700d9c15e51930181fba5e"}, function(err){

    if(err){
        console.log(err);
    } else {
        console.log("Delete m");
    }

})


Fruit.deleteMany({name: "Durian"}, function(err){

    if(err){
        console.log(err);
    } else {
        console.log("Delete Angela all");
    }
})

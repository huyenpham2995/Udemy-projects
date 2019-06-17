//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true
});

//define the structure of the database i.e the foundation to all
//new data
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    //data validation, the field is required to have
    required: [true, "Please check your data entry"]
  },
  rating: {
    type: Number,
    //data validation, the field is valid when it is within the min/max range
    min: 1,
    max: 10
  },
  review: String
});

//create new model
//collection name in singualr => mongoose will convert it into its prural form
//data will follow the fruitSchema structure
const Fruit = mongoose.model("Fruit", fruitSchema);

//create document
const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Good"
});

//insert
//fruit.save();

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 9,
  review: "Nice"
});

const banana = new Fruit ({
  name: "Banana",
  rating: 7,
  review: "Meh"
});

const pear = new Fruit ({
  name: "Pear",
  rating: 8,
  review: "Good"
});

//first parameter is an array of all newly added items
//call back function to detect any error
Fruit.insertMany([kiwi, banana, pear], function(err){
  if(err) {
    console.log("Error");
  } else {
    console.log("Successfully inserted");
  }
});

//update data
Fruit.updateOne({_id: "..."}, {name: "pinapple"}, function(err){
  if(err) {
    console.log("Error");
  } else {
    console.log("Successfully updated");
  }
});

//delete data
Fruit.deleteOne({name: "banana"}, function(err){
  if(err) {
    console.log("Error");
  } else {
    console.log("Successfully deleted");
  }
});

//Read data
 Fruit.find(function(err,fruits){
   if(err) {
     console.log("Error");
   } else {
     fruits.forEach(function(fruit){
       console.log(fruit.name);
     });
   }
 });

//establish relationship between person and fruit
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Missing required field"]
  },
  age: Int,
  favouriteFruit: fruitSchema
});

const person = new mongoose.model("Person", personSchema);
const john = new Person({
  name: "John",
  age: 37,
  favouriteFruit: banana
});

john.save();

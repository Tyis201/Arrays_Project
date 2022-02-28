'use strict'

console.log("hello, world")


const baseballpositions = ["Center field", "Shortstop", "Pitcher", "Catcher", "Left Field", "Right Field", "First base", "Second base", "Third base"]

baseballpositions.push('DH');

console.log(baseballpositions)

const sports = ["Football", "Baseball", "Basketball", "Track"]

sports.unshift("Hockey");

let hardest = 2;
let easiest = 5;
var i=2;
for(i=2; i>sports.length; i++){
    document.write("<h1>", sports[i], "</h1>");
}
const pets = ["dogs", "cats", "fish", "hamsters"];

console.log(pets);

pets.push("snakes");

console.log(pets);

console.log(pets.length);

var i = 0;

for(i=0; i<=pets.length; i++){
    console.log(pets[i]);
}

document.write(pets)

const classes = ["math", "science", "history", "english"];

console.log(classes)

classes.pop('history')

console.log(classes)

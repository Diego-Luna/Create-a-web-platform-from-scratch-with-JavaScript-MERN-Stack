// Arrays, it has very useful functions that allow us to:
// have super powers when programming

// we select it and do left click or double click, and select Code Runner


var fruits = ["Apples", "Banana", "Cherry", "Strawberry"];

console.log(fruits);
console.log("-------------------");

// returns the value of Arrays:
// ["Apples", "Banana", "Cherry", "Strawberry"]

// The number of elements that our arrays have
console.log(fruits.length);
console.log("-------------------");


// to access a position in the array
console.log(fruits[0]);
// returns us -> "Apples"
console.log("-------------------");

// with .push ('Grapes') add a new value to the end of array
var masFrutas = fruits.push("Grapes");
console.log(masFrutas);

console.log("-------------------");

// .pop () will delete the last value of the array
var last = fruits.pop();
console.log(last);

console.log("-------------------");

// will add it until the beginning of an array
var newLength = fruits.unshift("Grapes");
console.log(newLength);

console.log("-------------------");

// remove the element that is at the beginning
var clearStart = fruits.shift("Grapes");
console.log(clearStart);

console.log("-------------------");

// the uvivavion of a method is going to return us
var searchArray = fruits.indexOf("Cherry");
console.log(searchArray);

console.log("-------------------");


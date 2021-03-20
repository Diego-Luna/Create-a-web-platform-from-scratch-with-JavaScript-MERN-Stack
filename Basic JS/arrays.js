var fruits = ["Apples", "Banana", "Cherry", "Strawberry"];

console.log(fruits);
// returns the value of Arrays:
// ["Apples", "Banana", "Cherry", "Strawberry"]

// The number of elements that our arrays have
console.log(fruits.length);

// to access a position in the array
console.log(fruits[0]);
// returns us -> "Apples"

// with .push ('Grapes') add a new value to the end of array
var masFrutas = fruits.push("Grapes");

// .pop () will delete the last value of the array
var last = fruits.pop();

// will add it until the beginning of an array
var newLength = fruits.unshift("Grapes");

// remove the element that is at the beginning
var clearStart = fruits.shift("Grapes");

// the uvivavion of a method is going to return us
var searchArray = fruits.indexOf("Cherry");

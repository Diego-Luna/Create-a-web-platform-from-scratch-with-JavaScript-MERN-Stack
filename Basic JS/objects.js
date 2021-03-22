// JS is a language that is designed in an object paradigm
var myAuto = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
}

console.log(myAuto);

// Access a property of the object:
console.log(myAuto.brand);
// "Toyota"

// You can add properties that are going to be a function, they are called object methods.
var myAuto = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  AutoDetails: function () {
    console.log (`Auto ${this.model} ${this.year}`);
  }
}

console.log(myAuto);
myAuto.AutoDetails ();

// myAutoDetailsOfAuto ();
// Auto Corolla 2020
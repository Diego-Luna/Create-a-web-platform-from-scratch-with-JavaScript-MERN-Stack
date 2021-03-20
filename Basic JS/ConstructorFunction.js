function Auto (brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

// new will generate a new stay of our object, with another object
var autoNew = new Auto ("Tesla", "Model 3", 2020);

var autoNew2 = new Auto ("Tesla", "Model X", 2018);

var carNew3 = new Auto ("Toyota", "Corolla", 2020);


// challenge
function auto (BRAND, MODEL, ANNIO) {
  this.brand = BRAND;
  this.model = MODEL;
  this.annio = ANNIO;
}
var cars = [];
for (let i = 0; i <30; i ++) {
  var make = prompt("Enter the make of the car");
  var model = prompt("Enter the model of the car");
  var annio = prompt("Enter the year of the car");
  autos.push (new auto (make, model, year));
}

for (let i = 0; i <autos.length; i ++) {
  console.log (cars [i]);
}
function Auto(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

// new will generate a new stay of our object, with another object
var autoNew = new Auto("Tesla", "Model 3", 2020);
console.log(autoNew);

var autoNew2 = new Auto("Tesla", "Model X", 2018);
console.log(autoNew2);

var autoNew3 = new Auto("Toyota", "Corolla", 2020);
console.log(autoNew3);

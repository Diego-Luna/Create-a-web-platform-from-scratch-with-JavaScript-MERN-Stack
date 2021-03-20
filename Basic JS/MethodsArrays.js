var articles = [
  { name: "Bike", cost: 3000 },
  { name: "Tv", cost: 2500 },
  { name: "Book", cost: 320 },
  { name: "Cellular", cost: 10000 },
  { name: "Laptop", cost: 20000 },
  { name: "Keyboard", cost: 500 },
  { name: "Headphones", cost: 1700 },
];
// .filter: allows us to filter only the elements we want
// (according to certain criteria) and return them in a new array.
var articlesFiltered = articles.filter(function (article) {
  return item.cost <= 500;
});

// .map: create a new array with the results of the function call
// indicated applied to each of its elements.
var articleName = articles.map(function (article) {
  return article.name;
});

// find (): Returns the first element of the array that meets the given condition
var findArticle = articles.find(function (article) {
  return article.name === "Laptop";
});

// foreach (): Execute what we define once for each element of our array
articles.forEach(function (article) {
  console.log(article.name);
});

// some (): Checks if at least one element of the array meets the condition
// what do I give you.
// It generates a new arrray
var articlesBaratos = articles.some(function (article) {
  return item.cost <= 700;
});

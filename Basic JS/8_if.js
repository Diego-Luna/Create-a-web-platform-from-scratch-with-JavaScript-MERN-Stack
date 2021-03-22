
// the "if", are conditions that if it is fulfilled we make that code fragment
// and if it is not fulfilled, we can put an "else", and we do that code

// we select it and do left click or double click, and select Code Runner

var age = 18;

if (age === 18) {
  console.log("you can vote, it will be your first votes");
} else if (age > 18) {
  console.log("you can vote again");
} else {
  console.log(`You can't vote yet`);
}


// and we can reduce with:

// ternary operator
// condition? true: false

var number = 28;

var result = number >= 18 ? "you can vote, it will be your first votes" : "You can't vote yet";

console.log(result);

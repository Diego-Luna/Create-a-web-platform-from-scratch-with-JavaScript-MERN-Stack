var age = 18;

if (age === 18) {
  console.log("you can vote, it will be your first votes");
} else if (age > 18) {
  console.log("you can vote again");
} else {
  console.log(`You can't vote yet`);
}

// ternary operator
// condition? true: false

var number = 1;

var result = number === 1 ? "if I am a 1" : "I am not 1";

console.log(result);

// Hoisting, is when we call a variable and we haven't declared it yet
// we may get an error, or it doesn't happen as we expect

// we select it and do left click or double click, and select Code Runner

// this returns an undefined
console.log(myName);

var myName = "Diego";

// the function works but the variable sets us undefined
hey();

function hey() {
   console.log("Hello" + myName);
}

var myName = "Diego"
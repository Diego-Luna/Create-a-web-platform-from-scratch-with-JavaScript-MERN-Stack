// this returns an undefined
console.log(myName);

var myName = "Diego";

// the function works but the variable sets us undefined
hey();

function hey() {
   console.log("Hello" + myName);
}

var myName = "Diego"
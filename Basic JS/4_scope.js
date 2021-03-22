// the scope is the scope of our variables,
// there is global, which can be used in all code
// and local, that only in that sona where it is created

// we select it and do left click or double click, and select Code Runner

// The scope of a variable can be:
// 1- Global:
var myName = "Diego";

console.log(myName);

// 2- Local:
function Name() {
     var mySurname = "Moon";
     console.log (myName + "" + mySurname);
}

Name(); // Returns "Diego Luna"

// In all the code we can use the global variable.
// Local variables can only be accessed
// within the function in which they were declared.
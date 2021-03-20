// The scope of a variable can be:
// 1- Global:
var myName = "Diego";

// 2- Local:
function name () {
     var mySurname = "Moon";
     console.log (myName + "" + mySurname);
}

Name(); // Returns "Diego Luna"

// In all the code we can use the global variable.
// Local variables can only be accessed
// within the function in which they were declared.
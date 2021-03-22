// the "switch", allows us to do many conditions in a more orderly way than an "if"

// we create one with "switch"
// we put our variable
// and in the conditions with "case" and the value
// and at the end of a "break;"

// we select it and do left click or double click, and select Code Runner

var number = 1;

console.log(number);

switch (number) {
   case 1:
     console.log ('I am one');
     break;

   case 10:
     console.log ('I am 10');
     break;

   case 100:
     console.log ('I am 100');
     break;

   default:
     console.log ('try again');
     break;
}
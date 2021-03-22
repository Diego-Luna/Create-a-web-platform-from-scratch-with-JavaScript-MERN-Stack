// the loops are fragments of code that are going to be executed, a certain number of times

// we have the for, that while the condition is met, we will continue in the loop

// and we have the whils, as long as the condition evaluates to true

// we select it and do left click or double click, and select Code Runner

var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function SaluteStudents(student) {
  console.log(`Hello, ${student}`);
}

for (let i = 0; i < students.length; i++) {
  SaluteStudents(students[i]);
}

for (var student of students) {
  SaluteStudents(student);
}

var i = 0;

//do-while
do {
  SaluteStudents(students[i]);
  i++;
} while (i < students.length);

//while
while (students.length > 0) {
  var student = students.shift();
  SaluteStudents(student);
}

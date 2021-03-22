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

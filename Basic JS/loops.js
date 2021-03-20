var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function SaludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++) {
  SaludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes) {
  SaludarEstudiantes(estudiante);
}

var i = 0;

//do-while
do {
  SaludarEstudiantes(estudiantes[i]);
  i++;
} while (i < estudiantes.length);

//while
while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  SaludarEstudiantes(estudiante);
}

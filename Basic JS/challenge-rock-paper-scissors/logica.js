
const ElemenpuntajeUsuario = document.getElementById('PuntajeUsuario');
const ElementPuntajeComputadora = document.getElementById('PuntajeComputadora');

// 1 - Stone
// 2 - Paper
// 3 - Tigeras

var maquina;
var puntajeMaquina = 0;
var puntajeUsuario = 0;

function JugadorPlay(accion) {

  ElegitMaquina();

  if (accion != maquina) {

    switch (true) {
      case (maquina === 1 && accion === 2):
        console.log('Won');
        puntajeUsuario++;
        break;
      case (maquina === 2 && accion === 3):
        console.log('Won');
        puntajeUsuario++;
        break;
      case (maquina === 3 && accion === 1):
        console.log('Won');
        puntajeUsuario++;
        break;
      default:
        console.log('You lost!');
        puntajeMaquina++;
    }
  }

  console.log ('user:' + accion + "Machine:" + maquina);


  Puntaje();

}

function ElegitMaquina() {

  let valorRandomMaquina = 100 * Math.random();

  if (valorRandomMaquina >= 0 && valorRandomMaquina <= 32) {
    // 1, piedra
    maquina = 1;
  } else if (valorRandomMaquina >= 33 && valorRandomMaquina <= 65) {
    // 2, Papel
    maquina = 2;
  } else {
    // 3, Tigeras
    maquina = 3;
  }

}

function Puntaje() {
  ElemenpuntajeUsuario.innerHTML = puntajeUsuario;
  ElementPuntajeComputadora.innerHTML = puntajeMaquina;
}

function Reset() {
  maquina = 0;
  puntajeMaquina = 0;
  puntajeUsuario = 0;

  Puntaje();
}
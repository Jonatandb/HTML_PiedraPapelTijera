let puntosJugador = 0
let puntosPC = 0

const instruccionesDOM = document.querySelector("#instrucciones")
const puntosJugadorDOM = document.querySelector("#puntos-jugador")
const puntosPCDOM = document.querySelector("#puntos-pc")
const elegiTuArmaDOM = document.querySelector("#elegi-tu-arma")
const mensajeDOM = document.querySelector("#mensaje")
const eleccionJugadorDOM = document.querySelector("#eleccion-jugador")
const eleccionPCDOM = document.querySelector("#eleccion-pc")
const ganaPuntoDOM = document.querySelector("#gana-punto")
const botonReiniciar = document.querySelector("#reiniciar")
const botonesArmas = document.querySelectorAll(".arma")

botonesArmas.forEach(boton => {
  boton.addEventListener("click", iniciarTurno)
})

function iniciarTurno(event) {
  const armas = {
    'piedra': '✊🏻',
    'papel': '📄',
    'tijera': '✂'
  }
  const eleccionPC = Object.keys(armas)[Math.floor(Math.random() * 3)]
  const eleccionJugador = event.currentTarget.id

  mensajeDOM.classList.remove('disabled')
  eleccionJugadorDOM.innerText = eleccionJugador + ' ' + armas[eleccionJugador]
  eleccionPCDOM.innerText = eleccionPC + ' ' + armas[eleccionPC]

  if (
    (eleccionJugador === 'piedra' && eleccionPC === 'tijera') ||
    (eleccionJugador === 'tijera' && eleccionPC === 'papel') ||
    (eleccionJugador === 'papel' && eleccionPC === 'piedra')
  ) {
    ganaJugador()
  } else if (
    (eleccionPC === 'piedra' && eleccionJugador === 'tijera') ||
    (eleccionPC === 'tijera' && eleccionJugador === 'papel') ||
    (eleccionPC === 'papel' && eleccionJugador === 'piedra')
  ) {
    ganaPC()
  } else {
    empate()
  }

  if (puntosJugador == 5 || puntosPC == 5) {
    instruccionesDOM.innerText = puntosJugador == 5 ? "🎉 ¡Ganaste el juego! 🎉" : " 😭 ¡La computadora ganó el juego! 🤖"
    botonReiniciar.classList.toggle('disabled')
    elegiTuArmaDOM.classList.add('disabled')
    botonReiniciar.addEventListener('click', reiniciarJuego)
  }
}

const ganaJugador = () => {
  puntosJugador++
  puntosJugadorDOM.innerText = puntosJugador
  ganaPuntoDOM.innerText = '¡Ganaste un punto! 🔥'
}

const ganaPC = () => {
  puntosPC++
  puntosPCDOM.innerText = puntosPC
  ganaPuntoDOM.innerText = '¡La computadora ganó un punto! 😭'
}

const empate = () => {
  ganaPuntoDOM.innerText = '¡Empate! 🙀'
}

const reiniciarJuego = () => {
  puntosJugador = 0
  puntosPC = 0
  puntosJugadorDOM.innerText = puntosJugador
  puntosPCDOM.innerText = puntosPC
  elegiTuArmaDOM.classList.remove('disabled')
  mensajeDOM.classList.add('disabled')
  botonReiniciar.classList.toggle('disabled')
  instruccionesDOM.innerText = "El primero en llegar a 5 puntos gana."
}
const figure = window.document.querySelector(".ilustracao")
const text = window.document.querySelector(".text")
const link = window.document.querySelector(".lin")


const figureArray = [
  `<figure>
  <a href="/">
  <img src="./src/portifolio/calculadora.png" alt="">
  </a>
  </figure>`,
  `<figure>
    <a href="/">
      <img src="./src/portifolio/ecolet.png" alt="">
    </a>
  </figure>`,
  `<figure>
    <a href="/">
      <img src="./src/portifolio/Flapy.png" alt="">
    </a>
  </figure>`,
  `<figure>
    <a href="/">
      <img src="./src/portifolio/variadoflix.png" alt="">
    </a>
  </figure>`
]

const textArray = [
  `<p>
  <b>Calculadora</b> <br>
  Calculadora básica feita com JavaScript.
  </p>`,
  `<p>
    <b>Ecoleta</b> <br>
    Plataforma para auxilar no descarte de materiais recicláveis.
  </p>`,
  `<p>
    <b>Flappy bird</b> <br>
    Réplica desse famoso jogo utilizando Canvas.
  </p>`,
  `<p>
    <b>Variadoflix</b> <br>
    Plataforma que "copia" a interface da Netflix. A plataforma está disponível.
  </p>`
]

const linkArray = [
  `<p><a href="/"> Ver mais ... </a></p>`,
  `<p><a href="/"> Ver mais ... </a></p>`,
  `<p><a href="/"> Ver mais ... </a></p>`,
  `<p><a href="/"> Ver mais ... </a></p>`
]


let n = figureArray.length;
let position = 0;


function previousproject() {
  if (position >  0) {
    position -= 1
  } else {
    position = n-1
  }
  figure.innerHTML = figureArray[position]
  text.innerHTML = textArray[position]
  link.innerHTML = linkArray[position]
  timer();
}

function nextproject() {
  if (position < n-1) {
    position += 1
  } else {
    position = 0
  }
  
  figure.innerHTML = figureArray[position]
  text.innerHTML = textArray[position]
  link.innerHTML = linkArray[position]
  timer();
}


function timer() {
  count = setTimeout(nextproject, 3000)
}

function stopTimer() {
  clearTimeout(count);
}

function clickPrevious () {
  stopTimer()
  previousproject()
}
function clickNext() {
  stopTimer()
  nextproject()
}

window.onload = timer();
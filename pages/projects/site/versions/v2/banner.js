const figure = window.document.querySelector(".ilustracao")
const text = window.document.querySelector(".text")
const link = window.document.querySelector(".lin")



function nextproject() {
  console.log('próximo');
  figure.innerHTML = `
    <figure>
      <a href="/pages/projects/Ecoleta">
        <img src="./src/portifolio/variadoflix.png" alt="">
      </a>
    </figure>`
  text.innerHTML = `
    <p>
      <b>Ecoleta</b> <br>
      Projeto de uma plataforma de coleta de materiais recicláveis.
    </p>`
  link.innerHTML = `<p><a href="/"> Ver mais ... </a></p>`
}

function previousproject() {
  console.log('anterior');
}
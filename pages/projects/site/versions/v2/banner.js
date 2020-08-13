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
      <b>Variadoflix</b> <br>
      Projeto de uma plataforma que "copia" a interface da Netflix.
    </p>`
  link.innerHTML = `<p><a href="/"> Ver mais ... </a></p>`
}

function previousproject() {
  console.log('anterior');
}
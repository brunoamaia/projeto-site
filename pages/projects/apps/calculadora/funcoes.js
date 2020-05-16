var display = document.querySelector('div#display')
var txt = ''
var operation = []
var values = []
var posit_number = 0
var posit_operation = 0




// ################################## Funções
function soma() {
    // Verificar se algum valor foi digitado
    let n = txt.length
    if (n > 0) {
        values[posit_number] = Number(txt)
        posit_number += 1
        txt = ''
        display.innerHTML = `${txt}`    // Caso tenha sido o primeiro valor digitado, limpa a tela

        // Verifica se alguma operação ja foi realizada anteriormente
        if (posit_operation > 0) {
            let res = operation[posit_operation - 1] + values[posit_number - 1]
            operation[posit_operation] = res
            posit_operation += 1
            display.innerHTML = `${res}`
        } else if (posit_number > 1) { // Verifica se tem mais que 2 elementos. Caso tenha, soma os dois ultimos valores 
            let res = values[posit_number - 1] + values[posit_number - 2]
            operation[posit_operation] = res
            posit_operation += 1
            display.innerHTML = `${res}`
        }
    } else {
        display.innerHTML = 'Insira um valor!'
    }
}

function clearall() {
    txt = ''
    display.innerHTML = `Reseted!`
    values = []
    posit_number = 0
}

function clearelement () {
    txt = ''
    display.innerHTML = `${txt}`
}


// ################################## Números
function one() {
    txt += 1
    display.innerHTML = `${txt}`
}
function two() {
    txt += 2
    display.innerHTML = `${txt}`
}
function three() {
    txt += 3
    display.innerHTML = `${txt}`
}
function four() {
    txt += 4
    display.innerHTML = `${txt}`
}
function five() {
    txt += 5
    display.innerHTML = `${txt}`
}
function six() {
    txt += 6
    display.innerHTML = `${txt}`
}
function seven() {
    txt += 7
    display.innerHTML = `${txt}`
}
function eight() {
    txt += 8
    display.innerHTML = `${txt}`
}
function nine() {
    txt += 9
    display.innerHTML = `${txt}`
}
function zero() {
    txt += 0
    display.innerHTML = `${txt}`
}


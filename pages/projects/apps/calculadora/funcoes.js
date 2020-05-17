var display = document.querySelector('div#display')
var histor = document.querySelector('div#history') 
var list = ''
var txt = ''
var calculation = []
var pos_cal = 0
var values = []
var pos_val = 0
var operation = []
var pos_op = 0
var ms = 0


// Funções gerais

function validar_numero () {
    if (txt == '' || txt == "") {    // Verificar se algum valor foi digitado
        display.innerHTML = 'Insira um valor!'
    } else {
        list += txt
        values[pos_val] = Number(txt)
        pos_val += 1
        txt = ''
        display.innerHTML = `${txt}`    // Caso tenha sido o primeiro valor digitado, limpa a tela ***
        return true
    }
}

function saida () {

    display.innerHTML = `${txt}`
    histor.innerHTML = `${list}`
}


// ################################## Funções
function soma() {
    let val = validar_numero()
    if (val == true) {                  // Verifica se alguma operação ja foi realizada anteriormente
        if (pos_cal > 0) {              // Caso tenha ocrrido, utiliza o valor anteior
            let res = calculation[pos_cal - 1] + values[pos_val - 1]
            calculation[pos_cal] = res
            pos_cal += 1
            list += ' + '
            saida()
        } else if (pos_val > 1) {       // Verifica se tem mais que 2 elementos. Caso tenha, soma os dois ultimos valores 
            let res = values[pos_val - 1] + values[pos_val - 2]
            calculation[pos_cal] = res
            pos_cal += 1
            list += ' + '
            saida()
        } else {                        // Caso seja o primeiro elemento, adiciona o operador
            list += ' + '   
            saida()
        }
    } else {
        saida()
    }

}

function clearall() {
    txt = ''
    list = ''
    display.innerHTML = `Reseted!`
    values = []
    calculation = []
    operation = []
    pos_val = 0
    pos_cal = 0
    /*delay(1000)*/
    setTimeout(saida, 600);
    /*display.innerHTML = `${txt}`*/
}

function clearelement () {
    txt = ''
    display.innerHTML = `${txt}`
}

function resulte () {

    display.innerHTML = `${calculation[pos_cal-1]}`
}



// ################################## Números
function point () {
    let n = txt.length
   if (txt.indexOf('.') == -1) {
       txt += '.'
       display.innerHTML = `${txt}`
   } else {
       display.innerHTML = 'Not Permited!'
   }
    
    
}
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

// ################################## Delay - não está sendo usada
function delay(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
 }
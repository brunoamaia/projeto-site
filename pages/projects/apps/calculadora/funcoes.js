var display = document.querySelector('div#display')
var histor = document.querySelector('div#history')
var txt = ''
var calculation = []
var pos_cal = 0
var values = []
var pos_val = 0
var operation = []
var pos_op = 0
var ms = 0
var op = ''
var ac = 0
var notnumber = 0


// ##################################  Funções gerais
function validar_numero () {
    
    let n = txt.length
    if (n == 0) {    // Verificar se algum valor foi digitado
        notnumber = 1
    } else {
        values[pos_val] = Number(txt)
        pos_val += 1
        txt = ''
        display.innerHTML = `${txt}`    // Caso tenha sido o primeiro valor digitado, limpa a tela ***
        return true
    }
}

function saida () {
    if (notnumber == 1) {
        display.innerHTML = 'Insira um valor!'
    } else {
        display.innerHTML = `${txt}`
    }
    notnumber=0
    lista()
}

function lista () {
    let n = values.length
    let m = operation.length
    let resp = '' 

    if (n > m) {
        for (let i = 0; i < m; i++) {
            resp += values[i] + operation[i]
        }
        resp += values[n]
    }
    for (let i = 0; i < n; i++) {
        resp += values[i] + operation[i]
    }
    histor.innerHTML = `${resp}`
}

function operadores (op, ac) {
    if (op == 'sum') {
        if (ac != '-1') {
            operation[pos_op] = '+'
            pos_op += 1
        } else {
            operation[pos_op-1] = '+'
        }
    } else if (op == 'subtraction') {
        if (ac != '-1') {
            operation[pos_op] = '-'
            pos_op += 1
        } else {
            operation[pos_op-1] = '-'
        }
    } else if (op == 'div') {
        if (ac != '-1') {
            operation[pos_op] = '/'
            pos_op += 1
        } else {
            operation[pos_op-1] = '/'
        }
    } else if (op == 'mult') {
        if (ac != '-1') {
            operation[pos_op] = '*'
            pos_op += 1
        } else {
            operation[pos_op-1] = '*'
        }
    }
} 

// ################################## Funções
function soma() {
    let val = validar_numero()
    if (val == true) {                  // Verifica se alguma operação ja foi realizada anteriormente
        if (pos_cal > 0) {              // Caso tenha ocrrido, utiliza o valor anteior
            let res = calculation[pos_cal - 1] + values[pos_val - 1]
            calculation[pos_cal] = res
            operadores('sum', 1)
            pos_cal += 1
        } else if (pos_val > 1) {       // Verifica se tem mais que 2 elementos. Caso tenha, soma os dois ultimos valores 
            let res = values[pos_val - 1] + values[pos_val - 2]
            operadores('sum', 1)
            calculation[pos_cal] = res
            pos_cal += 1
        } else {
            if (pos_op == 0) {          // Caso seja o primeiro elemento, adiciona o operador
                operadores('sum', 1)
            } else {                    // Caso já tenha um operador, o substitiu
                operadores('sum', -1)
            }
        }
        saida()
    } else {
        if (pos_op == 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('sum', 1)
        } else {                    // Caso já tenha um operador, o substitiu
            operadores('sum', -1)
        }
        saida()
    }
}

function subtraction() {
    let val = validar_numero()
    if (val == true) {                  // Verifica se alguma operação ja foi realizada anteriormente
        if (pos_cal > 0) {              // Caso tenha ocrrido, utiliza o valor anteior
            let res = calculation[pos_cal - 1] - values[pos_val - 1]
            calculation[pos_cal] = res
            operadores('subtraction', 1)
            pos_cal += 1
        } else if (pos_val > 1) {       // Verifica se tem mais que 2 elementos. Caso tenha, soma os dois ultimos valores 
            let res = values[pos_val - 1] - values[pos_val - 2]
            operadores('subtraction', 1)
            calculation[pos_cal] = res
            pos_cal += 1
        } else {                        
            if (pos_op == 0) {          // Caso seja o primeiro elemento, adiciona o operador
                operadores('subtraction', 1)
            } else {                    // Caso já tenha um operador, o substitiu
                operadores('subtraction', -1)
            }
        }
        saida()
    } else {
        if (pos_op == 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('subtraction', 1)
        } else {                    // Caso já tenha um operador, o substitiu
            operadores('subtraction', -1)
        }
        saida()
    }
}

function division() {
    let val = validar_numero()
    if (val == true) {                  // Verifica se alguma operação ja foi realizada anteriormente
        if (pos_cal > 0) {              // Caso tenha ocrrido, utiliza o valor anteior
            let res = calculation[pos_cal - 1] - values[pos_val - 1]
            calculation[pos_cal] = res
            operadores('div', 1)
            pos_cal += 1
        } else if (pos_val > 1) {       // Verifica se tem mais que 2 elementos. Caso tenha, soma os dois ultimos valores 
            let res = values[pos_val - 1] - values[pos_val - 2]
            operadores('div', 1)
            calculation[pos_cal] = res
            pos_cal += 1
        } else {                        
            if (pos_op == 0) {          // Caso seja o primeiro elemento, adiciona o operador
                operadores('div', 1)
            } else {                    // Caso já tenha um operador, o substitiu
                operadores('div', -1)
            }
        }
        saida()
    } else {
        if (pos_op == 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('div', 1)
        } else {                    // Caso já tenha um operador, o substitiu
            operadores('div', -1)
        }
        saida()
    }
}

function multiplication() {
    let val = validar_numero()
    if (val == true) {                  // Verifica se alguma operação ja foi realizada anteriormente
        if (pos_cal > 0) {              // Caso tenha ocrrido, utiliza o valor anteior
            let res = calculation[pos_cal - 1] - values[pos_val - 1]
            calculation[pos_cal] = res
            operadores('mult', 1)
            pos_cal += 1
        } else if (pos_val > 1) {       // Verifica se tem mais que 2 elementos. Caso tenha, soma os dois ultimos valores 
            let res = values[pos_val - 1] - values[pos_val - 2]
            operadores('mult', 1)
            calculation[pos_cal] = res
            pos_cal += 1
        } else {                        
            if (pos_op == 0) {          // Caso seja o primeiro elemento, adiciona o operador
                operadores('mult', 1)
            } else {                    // Caso já tenha um operador, o substitiu
                operadores('mult', -1)
            }
        }
        saida()
    } else {
        if (pos_op == 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('mult', 1)
        } else {                    // Caso já tenha um operador, o substitiu
            operadores('mult', -1)
        }
        saida()
    }
}

function clearall() {
    txt = ''
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
    validar_numero()
    

    saida()
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
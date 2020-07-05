//  Programação da Calculadora em um único arquivo
//  Não está funcionando, pois utiliza chamada de funções que não estão habilitadas no HTML

let display = document.querySelector('div#display')
let histor = document.querySelector('div#history')
let txt = ''                // Text of display 
let result = 0        //
let values = []
let pos_val = 0
let operation = []
let pos_op = 0
let op = ''     // Operation calling - sum, subtraction, division, multiplication
let ac = 0      // Operator insertion - whether it will be after or before the number
let notnumber = 0   // Information about operations : 0- normal, 1- without value,  2- not running!, 3 - result
let newcount = 0 // first number is negative
let w = window.innerWidth;      // Width os window
var arrowu = window.document.getElementById('arrowup')
var arrowd = window.document.getElementById('arrowdown')
var info = window.document.getElementById('debug')


// ##################################  Funções gerais
function validar_numero () {    // Check that a number has been entered
    if (newcount == 1) {            // Utilizar o valor da conta anterior para iniciar uma nova conta
        values = []     // Rest values
        pos_val = 0
        operation = []
        pos_op = 0
        newcount = 0

        values[pos_val] = result    // Validate
        pos_val += 1
        txt = ''
        display.innerHTML = `${txt}`    // Caso tenha sido o primeiro valor digitado, limpa a tela ***
        result = 0
        return true

    } else {
        let n = txt.length
        if (n == 0) {    // Verificar se algum valor foi digitado
            notnumber = 1
        } else if (txt == '.') {
            notnumber = 1
        } else {
            values[pos_val] = Number(txt)
            pos_val += 1
            txt = ''
            display.innerHTML = `${txt}`    // Caso tenha sido o primeiro valor digitado, limpa a tela ***
            return true
        }
    }
}

function saida () {             // Control of the information that will be shown
    let n = String(result)
    
    if (notnumber == 1) {
        display.innerHTML = 'Insira um valor!'
    } else if (notnumber == 2 ){
        display.innerHTML = 'not running!'
    } else if (notnumber == 3 ){
        display.innerHTML = `${result}`
    } else {
        display.innerHTML = `${txt}`
    }
    
    // // Inserir setas para valores muito grandes
    /*if (n.length > 4) {    
        arrowu.innerHTML = '<button onclick="movlefup()"> <img src="./src/chevron-left.svg" alt="to move for left"> </button></div> <br>'
        arrowu.innerHTML += '<button onclick="movrigup()"> <img src="./src/chevron-right.svg" alt="to move for right"> </button></div>'
    } else {
        arrowu.innerHTML = ''
    } */

    notnumber=0
    lista()
}

function lista() {              // Historic of the operations 
    let n = values.length
    let m = operation.length
    let resp = '' 
    if (n ==0 && m == 0) {
        resp = ''
    }else if (n > m) {
        for (let i = 0; i < m; i++) {
            resp += values[i] + operation[i]
        }
        resp += values[n-1]
    } else {
        for (let i = 0; i < n; i++) {
            resp += values[i] + operation[i]
        }
    }

    // // Inserir setas para quano o histórico estiver muito grande
    /*//info.innerHTML = `Saida do historico = ${resp.length}`
    let g = String(resp)
    if (g.length > 20 ) {
        arrowd.innerHTML = '<button onclick="movlefdown()"> <img src="./src/chevron-left.svg" alt="to move for left"> </button></div> <br>'
        arrowd.innerHTML += '<button onclick="movrigdown()"> <img src="./src/chevron-right.svg" alt="to move for right"> </button></div>'
    } else { 
        arrowd.innerHTML = ''
    }*/

    histor.innerHTML = `${resp}`
}

function operadores(op, ac) {   // Insertion of the operators in the right place
    if (op == 'sum') {
        if (ac != '-1') {
            operation[pos_op] = ' + '
            pos_op += 1
        } else {
            operation[pos_op-1] = ' + '
        }
    } else if (op == 'subtraction') {
        if (ac != '-1') {
            operation[pos_op] = ' - '
            pos_op += 1
        } else {
            operation[pos_op-1] = ' - '
        }
    } else if (op == 'div') {
        if (ac != '-1') {
            operation[pos_op] = ' / '
            pos_op += 1
        } else {
            operation[pos_op-1] = ' / '
        }
    } else if (op == 'mult') {
        if (ac != '-1') {
            operation[pos_op] = ' * '
            pos_op += 1
        } else {
            operation[pos_op-1] = ' * '
        }
    } else if (op == 'percent')  {
        if (ac != '-1') {
            operation[pos_op] = '% '
            pos_op += 1
        } else {
            operation[pos_op-1] = '% '
        }
    }
} 

function calculator() {         // Calculate the result
    // values - validated values 
    // operation - validated operation
    let validador = 0
    let counts = values.slice()         // Como values e operation são utilizados na saida, vamos "clonar" os arrays
    let oper = operation.slice()        // para não atrapalhar as saidas dos dados 
    let len = counts.length
    //let m = oper.length

    if (len > 1){             //Verificar se tem elementos suficientes para rezlizar alguma operação
        validador = 1
    } else if (oper[0] == '% ') {
        validador = 1
    }
    
    info.innerHTML += `<br> Vetores Iniciais:`
    info.innerHTML += `<br> Valores = ${counts} <br> Operadores = ${oper}`

    while (validador == 1) {
        let p_per = oper.indexOf('% ')
        while (p_per != -1) {
            info.innerHTML += `<br><br>Porcentagem`
            if (p_per > 0) {
                if (oper[p_per-1] == ' + ' ) {
                    counts[p_per-1] = counts[p_per-1]*(1+counts[p_per]/100)
                    oper.splice(p_per, 1)     // Remove as operações realizadas
                    oper.splice(p_per - 1, 1)
                    counts.splice(p_per, 1)
                    info.innerHTML += '<br>somar porcentagem'
                } else if (oper[p_per-1] == ' - ' ) {
                    counts[p_per-1] = counts[p_per-1]*(1-counts[p_per]/100)
                    oper.splice(p_per, 1)     // Remove as operações realizadas
                    oper.splice(p_per - 1, 1)
                    counts.splice(p_per, 1)
                    info.innerHTML += '<br>subtrair porcentagem'
                } else {
                    counts[p_per] = Number(counts[p_per]/100)
                    oper.splice(p_per, 1)     // RRemove as operações realizadas
                }
            } else {
                counts[p_per] = Number(counts[p_per]/100)
                oper.splice(p_per, 1)     // RRemove as operações realizadas
            }
            p_per = oper.indexOf('% ')
            info.innerHTML += `<br> Valores = ${counts} <br> Operadores = ${oper}` 
        }

        let p_mult = oper.indexOf(' * ')       // realiza a multiplicação
        while (p_mult != -1) {
            info.innerHTML += `<br><br>Multiplicação`
            counts[p_mult] = Number(counts[p_mult]) * Number(counts[p_mult+1])  
            counts.splice(p_mult+1, 1)      // Remove o segundo elemento da multiplicação
            oper.splice(p_mult, 1)     // Remove a multiplicação realizada

            p_mult = oper.indexOf(' * ')
            info.innerHTML += `<br> Valores = ${counts} <br> Operadores = ${oper}` 
        }
        
        let p_div = oper.indexOf(' / ')       // realiza a divisão
        while (p_div != -1) {
            info.innerHTML += `<br><br>Divisão`
            if (counts[p_div+1] == 0) {
                result = 'Not divide by 0!'
                return notnumber = 3
            } else {
                counts[p_div] = Number(counts[p_div]) / Number(counts[p_div + 1])
                counts.splice(p_div + 1, 1)
                oper.splice(p_div, 1)
            }
            p_div = oper.indexOf(' / ')
            info.innerHTML += `<br> Valores = ${counts} <br> Operadores = ${oper}` 
        }

        let p_sum = oper.indexOf(' + ')     // Realiza a Soma
        while (p_sum != -1) {
            info.innerHTML += `<br><br>Soma`
            if (p_sum > 0 ) {   // Verificar se o primeiro valor é negativo (o Segundo não precisa)
                if (oper[p_sum-1] == ' - ') {   // Se o 1º for neg, inverte seu sinal
                    let res = Number((counts[p_sum])*(-1)) + Number(counts[p_sum+1])
                    info.innerHTML += `<br> Valor = ${res}` 
                    if (res < 0 ) { // se o resultado for negativo, altera o sinal no vetor de sinais
                        info.innerHTML += '<br> Negativo'
                        counts[p_sum] = res*(-1)
                        oper[p_sum-1] = ' - '
                    } else {
                        info.innerHTML += '<br> Positivo'
                        counts[p_sum] = res
                        oper[p_sum-1] = ' + '
                    }
                }
            } else {
                counts[p_sum] = Number(counts[p_sum]) +  Number(counts[p_sum+1])  
            }
            counts.splice(p_sum+1, 1)
            oper.splice(p_sum, 1)

            p_sum = oper.indexOf(' + ')
            info.innerHTML += `<br> Valores = ${counts} <br> Operadores = ${oper}` 
        }


        let p_sub = oper.indexOf(' - ')     // Realiza a subtração
        while (p_sub != -1) {
            info.innerHTML += `<br><br>Subtração`
            if (p_sub > 0) {    // Verificar se o primeiro valor é negativo (o Segundo não precisa)
                if (oper[p_sub-1] == ' - ') {   // Se o 1º for neg, inverte seu sinal
                    let res = Number((counts[p_sub])*(-1) - counts[p_sub+1])
                    if (res < 0 ) { // se o resultado for negativo, altera o sinal no vetor de sinais
                        counts[p_sub] = res*(-1)
                        oper[p_sub-1] = ' - '
                    } else {
                        counts[p_sub] = res
                        oper[p_sub-1] = ' + '
                    }
                }
            } else {
                counts[p_sub] = Number(counts[p_sub] - counts[p_sub+1])  
            }
            counts.splice(p_sub+1, 1)
            oper.splice(p_sub, 1)
            
            p_sub = oper.indexOf(' - ')
            info.innerHTML += `<br> Val = ${counts} <br> Ope = ${oper} ` 
        }
        
        n = counts.length                   // Teste para finalização das operações 
        if (n == 1 ) {
            validador = 0
        }
    }

    result = counts
    notnumber = 3   // Information for display 
    newcount = 1    // Information for validate number
}

// ################################## Funções
function soma() {
    let val = validar_numero()
    if (val == true) {                  // Se o número for válido, insere o operador
        operadores('sum', 1)
    } else {                            // Se o número Não for válido, verifica se existe oprador
        if (pos_op != 0) {              // Caso exista, troca ele
            operadores('sum', -1)
        }
    }
    saida()
}

function subtraction() {
    let val = validar_numero()
    if (val == true) {                  //  Se o número for válido, insere o operador
        operadores('subtraction', 1)
    } else {
        if (pos_op != 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('subtraction', -1)
        }
    }
    saida()
}

function division() {
    let val = validar_numero()
    if (val == true) {                  //  Se o número for válido, insere o operador
        operadores('div', 1)
    } else {
        if (pos_op != 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('div', -1)
        }
    }
    saida()
}

function multiplication() {
    let val = validar_numero()
    if (val == true) {                  //  Se o número for válido, insere o operador
        operadores('mult', 1)
    } else {
        if (pos_op != 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('mult', -1)
        }
    }
    saida()
}

function percent() {
    let val = validar_numero()
    if (val == true) {                  //  Se o número for válido, insere o operador
        operadores('percent', 1)
    } else {
        if (pos_op != 0) {          // Caso seja o primeiro elemento, adiciona o operador
            operadores('percent', -1)
        }
    }
    saida()
    // notnumber = 2 //Error - Not Running
    // saida()
}

function signal() {
    txt = -1 * txt
    saida()
}

function clearall() {
    info.innerHTML=''
    display.innerHTML = 'Reseted!'
    histor.innerHTML = '..........'
    txt = ''
    result = 0
    values = []
    pos_val = 0
    operation = []
    pos_op = 0
    op = ''
    ac = 0
    newcount = 0
    transit1()    //Animation reseted
    setTimeout(transit2, 300)
    setTimeout(transit3, 600)
    setTimeout(transit4, 900)
    
    setTimeout(saida, 1200)
}

function clearelement() {
    txt = ''
    display.innerHTML = `${txt}`
}

function resulte() {
    validar_numero()
    calculator()
    saida()
}


function transit1() {
    histor.innerHTML = '........'
}
function transit2() {
    histor.innerHTML = '......'
}
function transit3() {
    histor.innerHTML = '....'
}
function transit4() {
    histor.innerHTML = '..' 
}
// ################################## Números
function point() {
    let n = txt.length
   if (txt.indexOf('.') == -1) {
       txt += '.'
       display.innerHTML = `${txt}`
   } else {
       display.innerHTML = 'Not Permited!'
   }
    
    
}
/*function one() {
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
} */

function numb(cond) {
    let val = Number(cond)
    switch (val) {
        case 0:
            txt += 0
            display.innerHTML = `${txt}`
            break;
        case 1:
            txt += 1
            display.innerHTML = `${txt}`
            break;
        case 2:
            txt += 2
            display.innerHTML = `${txt}`
            break;
        case 3:
            txt += 3
            display.innerHTML = `${txt}`
            break;
        case 4:
            txt += 4
            display.innerHTML = `${txt}`
            break;
        case 5:
            txt += 5
            display.innerHTML = `${txt}`
            break;
        case 6:
            txt += 6
            display.innerHTML = `${txt}`
            break;
        case 7:
            txt += 7
            display.innerHTML = `${txt}`
            break;
        case 8:
            txt += 8
            display.innerHTML = `${txt}`
            break;
        case 9:
            txt += 9
            display.innerHTML = `${txt}`
            break;
    }
}

var display = document.querySelector('div#display')
var histor = document.querySelector('div#history')
var txt = ''                // Text of display 
var result = 0        //
var values = []
var pos_val = 0
var operation = []
var pos_op = 0
var op = ''     // Operation calling - sum, subtraction, division, multiplication
var ac = 0      // Operator insertion - whether it will be after or before the number
var notnumber = 0   // Information about operations : 0- normal, 1- without value,  2- not running!
var neg = 0 // first number is negative


// ##################################  Funções gerais
function validar_numero () {    // Check that a number has been entered 
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

function saida () {             // Control of the information that will be shown 
    if (notnumber == 1) {
        display.innerHTML = 'Insira um valor!'
    } else if (notnumber == 2 ){
        display.innerHTML = 'not running!'
    }else {
        display.innerHTML = `${txt}`
    }
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
        resp += values[n]
    }
    for (let i = 0; i < n; i++) {
        resp += values[i] + operation[i]
    }
    histor.innerHTML = `${resp}`
    console.log(`Valores = ${values}`)
    console.log(`Opera = ${operation}`)
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
    }
} 

function calculator(a, b) {         // Calculate the result
    // values - validated values 
    // operation - validated operation
    let validador = 0
    let counts = a         // Como values e operation são utilizados na saida, vamos "clonar" os arrays 
    let oper = b        // para não atrapalhar as saidas dos dados 
    let len = counts.length
    //let m = oper.length
    
    console.log('--- Calculos ---')
    console.log(`values = ${values}`)
    console.log(`operatin = ${operation}`)
    console.log(`counts = ${counts}`)
    console.log(`oper = ${oper}`)
    console.log('--- AAAAAAAAAAA ---')



    if (len > 1){             //Verificar se tem elementos suficientes para rezlizar alguma operação
        validador = 1
    }

    while (validador == 1) {
        


        let p_mult = oper.indexOf(' * ')       // realiza a multiplicação
        if (p_mult != -1) {
            counts[p_mult] = counts[p_mult] * counts[p_mult+1]  
            counts.splice(p_mult+1, 1)      // Remove o segundo elemento da multiplicação
            oper.splice(p_mult, 1)     // Remove a multiplicação realizada
        }
        
        let p_div = oper.indexOf(' / ')       // realiza a divisão
        if (p_div != -1) {
            counts[p_div] = counts[p_div] / counts[p_div+1]  
            counts.splice(p_div+1, 1)      // Remove o segundo elemento da multiplicação
            oper.splice(p_div, 1)     // Remove a multiplicação realizada
        }

        let p_sum = oper.indexOf(' + ')
        if (p_div != -1) {
            counts[p_div] = counts[p_div] / counts[p_div+1]  
            counts.splice(p_div+1, 1)      // Remove o segundo elemento da multiplicação
            oper.splice(p_div, 1)     // Remove a multiplicação realizada
        }

        
        let p_sub = oper.indexOf(' - ')
        
        n = counts.length                   // Teste para finalização das operações 
        if (n == 1 || p_mult == -1 || p_div == -1 || p_sum == -1 || p_sub == -1) {
            validador = 0
        }
    }

     console.log(`values = ${values}`)
    console.log(`operatin = ${operation}`)
    console.log(`counts = ${counts}`)
    console.log(`oper = ${oper}`)
    console.log('--- Calculos ---')
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
    notnumber = 2
    saida()
}

function signal() {
    notnumber = 2
    saida()
}

function clearall() {
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
    neg = 0
    /*setTimeout(transit1, 500);    Animation reseted
    setTimeout(transit2, 500);
    setTimeout(transit3, 500);
    setTimeout(transit4, 500);*/
    
    setTimeout(saida, 300);
}

function clearelement() {
    txt = ''
    display.innerHTML = `${txt}`
}

function resulte() {
    validar_numero()
    calculator(values, operation)
    saida()
}


/*function transit1() {
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
}*/
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

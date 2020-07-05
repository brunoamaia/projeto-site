// Control and formatation of values for the primary display and historic
// saida - control of the Principal display
// lista - control of the Second display (historic)

var display = document.querySelector('div#display')
var histor = document.querySelector('div#history')

class exit {
    constructor( txt, operation='', values='') {
        this.txt = txt                  // Value on the main display
        this.operation = operation      // Operations array
        this.values = values            // Values array
        //console.log('Saida');
        //console.log(`txt = ${txt} \noperation = ${operation} \nvalues = ${values} \nresult = ${result}  `);
    }

    numbNow() {
        display.innerHTML = `${this.txt}`
    }

    operators() {
        let zz = lista(this.txt, this.operation, this.values)
        return zz
    }

    reset() {
        display.innerHTML = 'Reseted !!!'
        transit1()    //Animation reseted
        setTimeout(transit2, 200)
        setTimeout(transit3, 400)
        setTimeout(transit4, 600)
        setTimeout(resd, 800)
    }
}
export default exit

function lista(now, operations, values) {              // Historic of the operationss
    let n = operations.length
    let m = values.length
    let resp = '' 
    if (n ==0 && m == 0) {
        resp = ''
    }else if ( m == n ){
        for (let i = 0; i < m; i++) {
            resp += values[i] + operations[i]
        }
    } else if (m > n){
        for (let i = 0; i < n; i++) {
            resp += values[i] + operations[i]
        }
        resp += values[m-1]
    } else {
        console.log("UÉ '-'");
    }

    // // Inserir setas para quano o histórico estiver muito grande
    /* //info.innerHTML = `Saida do historico = ${resp.length}`
   let g = String(resp)
    if (g.length > 20 ) {
        arrowd.innerHTML = '<button onclick="movlefdown()"> <img src="./src/chevron-left.svg" alt="to move for left"> </button></div> <br>'
        arrowd.innerHTML += '<button onclick="movrigdown()"> <img src="./src/chevron-right.svg" alt="to move for right"> </button></div>'
    } else { 
        arrowd.innerHTML = ''
    }*/

    histor.innerHTML = `${resp}`
    now = ''
    return [now, operations, values]
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
function resd() {
    display.innerHTML = ''
    histor.innerHTML = ''
}
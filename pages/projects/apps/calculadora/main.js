// import class    =>  import class from 'arq.js'
// import function =>  import { func } from 'arq.js'

// Import functions fromd modules
import digit from './oo/digitis.js';
import operBasic from './oo/operatorsBasic.js'
import auxFunctions from './oo/operatorsSecond.js'
import clears from './oo/clear.js'
/*import { point, resulte, signal } from './OO/operatorsSecond.js'
import { clearAll, clearElement } from './OO/clear.js';*/


// Create vars 
let txt = ''                // Text of display 
let result = 0              // Value/information for principal display  
let values = []             // Array of values
let operation = []          // Array of operators
let w = window.innerWidth;      // Width os window
var arrowu = window.document.getElementById('arrowup')
var arrowd = window.document.getElementById('arrowdown')
let info = window.document.getElementById('informations')

// Activations of modules/functions

// Functions for Operators 
let divisi = document.querySelector('.division')
let multiplicat = document.querySelector('.multiplication')
let percenti = document.querySelector('.percent')
let subtract = document.querySelector('.subtraction')
let suma = document.querySelector('.sum')

divisi.addEventListener('click', () => {
    let div = new operBasic(txt, operation, values)
    
    let fini = div.division()
    txt = fini[0]
    operation = fini[1]
    values = fini[2]
})
multiplicat.addEventListener('click', () => {
    let multpl = new operBasic(txt, operation, values)
    
    let fini = multpl.multiplication()
    txt = fini[0]
    operation = fini[1]
    values = fini[2]
})
percenti.addEventListener('click', () => {
    let porcent = new operBasic(txt, operation, values)
    
    let fini = porcent.percent()
    txt = fini[0]
    operation = fini[1]
    values = fini[2]
})
subtract.addEventListener('click', () => {
    let soma = new operBasic(txt, operation, values)
    
    let fini = soma.subtraction()
    txt = fini[0]
    operation = fini[1]
    values = fini[2]
})
suma.addEventListener('click', () => {
    let soma = new operBasic(txt, operation, values)
    
    let fini = soma.sum()
    txt = fini[0]
    operation = fini[1]
    values = fini[2]
})

// Functions Aux
let point = document.querySelector('.point')
let resulte = document.querySelector('.resulte')
let sign = document.querySelector('.signal')

point.addEventListener('click', () => {
    let pont = new auxFunctions(txt)
    txt = pont.point()
})
resulte.addEventListener('click', () => {
    let res = new auxFunctions(txt, operation, values)
    let neVal = res.resulte()
    txt = neVal[0]
    operation = neVal[1]
    values = neVal[2]
})
sign.addEventListener('click', () => {
    let sig = new auxFunctions(txt)
    txt = sig.signal()
})

// Other Functions
let  clearAl = document.querySelector('.clearAll')
let  clearElement = document.querySelector('.clearElement')

clearAl.addEventListener('click', () => {
    txt = ''
    result = 0
    values = []
    operation = []
    let clA = new clears(txt)
    let reset =  clA.clearAll()
})
clearElement.addEventListener('click', () => {
    let clE = new clears(txt)
    txt =  clE.clearElement()
})

// Function for digtis
let num0 = document.querySelector('.zero')
let num1 = document.querySelector('.one')
let num2 = document.querySelector('.two')
let num3 = document.querySelector('.three')
let num4 = document.querySelector('.four')
let num5 = document.querySelector('.five')
let num6 = document.querySelector('.six')
let num7 = document.querySelector('.seven')
let num8 = document.querySelector('.eigth')
let num9 = document.querySelector('.nine')


num0.addEventListener('click', () => {
    let num = new digit(0, txt)
    txt = num.value()
});
num1.addEventListener('click', () => {
    let num = new digit(1, txt)
    txt = num.value()
});
num2.addEventListener('click', () => {
    let num = new digit(2, txt)
    txt = num.value()
});
num3.addEventListener('click', () => {
    let num = new digit(3, txt)
    txt = num.value()
});
num4.addEventListener('click', () => {
    let num = new digit(4, txt)
    txt = num.value()
});
num5.addEventListener('click', () => {
    let num = new digit(5, txt)
    txt = num.value()
});
num6.addEventListener('click', () => {
    let num = new digit(6, txt)
    txt = num.value()
});
num7.addEventListener('click', () => {
    let num = new digit(7, txt)
    txt = num.value()
});
num8.addEventListener('click', () => {
    let num = new digit(8, txt)
    txt = num.value()
});
num9.addEventListener('click', () => {
    let num = new digit(9, txt)
    txt = num.value()
});
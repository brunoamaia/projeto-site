// Functions 

import exit from './wayout.js'
import validate from './validation.js'
import calculator from './calculate.js'

class auxFunctions {
    constructor( txt, operation='', values='') {
        this.txt = txt                  // Value on the main display
        this.operation = operation      // Operations array
        this.values = values            // Values array
        //console.log('Funções');
        //console.log(`txt = ${txt} \noperation = ${operation} \nvalues = ${values} \nresult = ${result}  `);
    }
    
    point() {                       // Insert point in the number
        let n = this.txt.length
        if (this.txt.indexOf('.') == -1) {
            if (n == 0) {
                this.txt = '0.'
            } else {
                this.txt += '.'
            }
            let disp = new exit(this.txt)
            disp.numbNow()
            return this.txt
        } else {
            let error = new exit('Not Permited!')
            error.numbNow()
            return this.txt
        }
    }

    resulte() {                     // Calculate the value of operations
        let val = new validate(this.txt, this.operation, this.values)
        let val1 = val.test()

        this.txt = val1[0]
        this.values = val1[1]
        let nVal = val1[2]

        if (nVal == true) {
            let calc = new calculator(this.txt, this.operation, this.values)
            this.txt = calc.operations()

        } else {
            let err = new exit('Insert a Number!')
            err.numbNow()
        }

        let out = new exit(this.txt, this.operation, this.values)
        out.numbNow()
        out.operators()

        return [this.txt, this.operation=[], this.values=[]]
    }

    signal() {                          // Invert of signal of number
        let aux = -1 * Number(this.txt)
        this.txt = String(aux)
        let disp = new exit(this.txt)
        disp.numbNow()
        return this.txt
    }
}
export default auxFunctions
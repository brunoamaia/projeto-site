// Process of validation the numbers/operations 

import exit from './wayout.js'

class validate {
    constructor(txt, operation='', values='') {
        this.txt = txt                  // Value on the main display
        this.operation = operation      // Operations array
        this.values = values            // Values array
        //console.log('Validação');
        //console.log(`txt = ${txt} \noperation = ${operation} \nvalues = ${values} \nresult = ${result}  `);
    }

    test(){                 // Check that the number entered on the display is valid
        //console.log('Validação - tentar validar');
        let n = this.txt.length
        if (n == 0) {    // Verificar se algum valor foi digitado
            //console.log('Sem digito');
            this.notnumber = 1
            return ['', this.values,false]
        } else if (this.txt == '.') {
            //console.log('Apenas ponto');
            this.notnumber = 1
            return ['', this.values, false]
        } else {
            //console.log('Validado');
            this.values.push(Number(this.txt))
            this.txt = ''
            let disp = new exit(this.txt)
            disp.numbNow()                  // Caso tenha sido o primeiro valor digitado, limpa a tela ***
            return [this.txt, this.values, true]
        }
    }

    historic(){             // Passes parameters to the display
        //console.log('historico - validação');
        let histExit = new exit(this.txt, this.operation, this.values)
        let ret = histExit.operators()
        return ret
    }
}

export default validate
// functions Basics (operators)
// actions  

import validate from './validation.js'

class operBasic{
    constructor( txt, operation='', values='') {
        this.txt = txt                  // Value on the main display
        this.operation = operation      // Operations array
        this.values = values            // Values array
        //console.log('Operadores');
        //console.log(`txt = ${txt} \noperation = ${operation} \nvalues = ${values} \nresult = ${result}  `);
    }

    division() {
        //console.log('Subtraction');
        let val = new validate(this.txt, this.operation, this.values)
        let teste = val.test()
        this.txt = teste[0]
        this.values = teste[1]

        if (teste[2] == true) {                  // Se o número for válido, insere o operador
            this.operation = operadores('division', 1, this.operation)
        } else {                            // Se o número Não for válido, verifica se existe oprador
            this.operation = operadores('division', -1, this.operation)
        }

        let hist = new validate(this.txt, this.operation, this.values)
        let actual = hist.historic()
        return actual
    }

    multiplication() {
        //console.log('Subtraction');
        let val = new validate(this.txt, this.operation, this.values)
        let teste = val.test()
        this.txt = teste[0]
        this.values = teste[1]

        if (teste[2] == true) {                  // Se o número for válido, insere o operador
            this.operation = operadores('multiplication', 1, this.operation)
        } else {                            // Se o número Não for válido, verifica se existe oprador
            this.operation = operadores('multiplication', -1, this.operation)
        }

        let hist = new validate(this.txt, this.operation, this.values)
        let actual = hist.historic()
        return actual
    }

    percent() {
        //console.log('Subtraction');
        let val = new validate(this.txt, this.operation, this.values)
        let teste = val.test()
        this.txt = teste[0]
        this.values = teste[1]

        if (teste[2] == true) {                  // Se o número for válido, insere o operador
            this.operation = operadores('percent', 1, this.operation)
        } else {                            // Se o número Não for válido, verifica se existe oprador
            this.operation = operadores('percent', -1, this.operation)
        }

        let hist = new validate(this.txt, this.operation, this.values)
        let actual = hist.historic()
        return actual
    }

    subtraction() {
        //console.log('Subtraction');
        let val = new validate(this.txt, this.operation, this.values)
        let teste = val.test()
        this.txt = teste[0]
        this.values = teste[1]

        if (teste[2] == true) {                  // Se o número for válido, insere o operador
            this.operation = operadores('subtraction', 1, this.operation)
        } else {                            // Se o número Não for válido, verifica se existe oprador
            this.operation = operadores('subtraction', -1, this.operation)
        }

        let hist = new validate(this.txt, this.operation, this.values)
        let actual = hist.historic()
        return actual
    }

    sum() {
        //console.log('Sum');
        let val = new validate(this.txt, this.operation, this.values)
        let teste = val.test()
        this.txt = teste[0]
        this.values = teste[1]

        if (teste[2] == true) {                  // Se o número for válido, insere o operador
            this.operation = operadores('sum', 1, this.operation)
        } else {                            // Se o número Não for válido, verifica se existe oprador
            this.operation = operadores('sum', -1, this.operation)
        }

        let hist = new validate(this.txt, this.operation, this.values)
        let actual = hist.historic()
        return actual
    }
}
export default operBasic

function operadores(op, pos, oper) {   // Insertion of the operators in the right place
    // OP - operation       pos - Position of the operation         oper - Array of the operations
    if (op == 'sum') {
        if (pos != '-1') {
            oper.push(' + ')
            return oper
        } else {
            let n = oper.length
            oper[n-1] = ' + '
            return oper
        }
    } else if (op == 'subtraction') {
        if (pos != '-1') {
            oper.push(' - ')
            return oper
        } else {
            let n = oper.length
            oper[n-1] = ' - '
            return oper
        }
    } else if (op == 'division') {
        if (pos != '-1') {
            oper.push(' / ')
            return oper
        } else {
            let n = oper.length
            oper[n-1] = ' / '
            return oper
        }
    } else if (op == 'multiplication') {
        if (pos != '-1') {
            oper.push(' * ')
            return oper
        } else {
            let n = oper.length
            oper[n-1] = ' * '
            return oper
        }
    } else if (op == 'percent')  {
        if (pos != '-1') {
            oper.push('% ')
            return oper
        } else {
            let n = oper.length
            oper[n-1] =  '% '
            return oper
        }
    }
}
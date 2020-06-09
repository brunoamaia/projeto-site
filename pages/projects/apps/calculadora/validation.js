class validate {
    async validar_numero() {    // Check that a number has been entered
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

}

export default validate;


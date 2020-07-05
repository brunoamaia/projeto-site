// Part responsible for application calculations

var info = document.querySelector('div#informations') // print informations in the page

class calculator{
    constructor(txt, operation='', values='') {
        this.txt = txt                  // Value on the main display
        this.operation = operation      // Operations array
        this.values = values            // Values array
        //console.log('Calculate');
        //console.log(`txt = ${txt} \noperation = ${operation} \nvalues = ${values} \nresult = ${result}  `);
    }

    operations() {
        let validador = 0
        let oper = this.operation.slice()        // para não atrapalhar as saidas dos dados 
        let counts = this.values.slice()         // Como values e operation são utilizados na saida, vamos "clonar" os arrays
        let len = counts.length
        let n = counts.length

        if (len > 1) {             //Verificar se tem elementos suficientes para rezlizar alguma operação
            validador = 1
        } else if (oper[0] == '% ') {
            validador = 1
        }

        while (validador == 1) {
            let p_per = oper.indexOf('% ')
            while (p_per != -1) {
                //info.innerHTML += `<br><br>Porcentagem`
                if (p_per > 0) {
                    if (oper[p_per - 1] == ' + ') {
                        counts[p_per - 1] = counts[p_per - 1] * (1 + counts[p_per] / 100)
                        oper.splice(p_per, 1)     // Remove as operações realizadas
                        oper.splice(p_per - 1, 1)
                        counts.splice(p_per, 1)
                        //info.innerHTML += 'soma'
                    } else if (oper[p_per - 1] == ' - ') {
                        counts[p_per - 1] = counts[p_per - 1] * (1 - counts[p_per] / 100)
                        oper.splice(p_per, 1)     // Remove as operações realizadas
                        oper.splice(p_per - 1, 1)
                        counts.splice(p_per, 1)
                        //info.innerHTML += 'subtração'
                    } else {
                        counts[p_per] = Number(counts[p_per] / 100)
                        oper.splice(p_per, 1)     // RRemove as operações realizadas
                    }
                } else {
                    counts[p_per] = Number(counts[p_per] / 100)
                    oper.splice(p_per, 1)     // RRemove as operações realizadas
                }
                p_per = oper.indexOf('% ')
                //info.innerHTML += `<br> Val = ${counts} <br> Ope = ${oper} `
            }

            let p_mult = oper.indexOf(' * ')       // realiza a multiplicação
            while (p_mult != -1) {
                //info.innerHTML += `<br><br>Multiplicação`
                counts[p_mult] = Number(counts[p_mult]) * Number(counts[p_mult + 1])
                counts.splice(p_mult + 1, 1)      // Remove o segundo elemento da multiplicação
                oper.splice(p_mult, 1)     // Remove a multiplicação realizada

                p_mult = oper.indexOf(' * ')
                //info.innerHTML += `<br> Val = ${counts} <br> Ope = ${oper} `
            }

            let p_div = oper.indexOf(' / ')       // realiza a divisão
            while (p_div != -1) {
                //info.innerHTML += `<br><br>Divisão`
                if (counts[p_div + 1] == 0) {
                    result = 'Not divide by 0!'
                    return notnumber = 3
                } else {
                    counts[p_div] = Number(counts[p_div]) / Number(counts[p_div + 1])
                    counts.splice(p_div + 1, 1)
                    oper.splice(p_div, 1)
                }
                p_div = oper.indexOf(' / ')
                //info.innerHTML += `<br> Val = ${counts} <br> Ope = ${oper} `
            }

            let p_sum = oper.indexOf(' + ')     // Realiza a Soma
            while (p_sum != -1) {
                //info.innerHTML += `<br><br>Soma`
                if (p_sum > 0) {   // Verificar se o primeiro valor é negativo (o Segundo não precisa)
                    if (oper[p_sum - 1] == ' - ') {   // Se o 1º for neg, inverte seu sinal
                        let res = Number((counts[p_sum]) * (-1)) + Number(counts[p_sum + 1])
                        //info.innerHTML += `<br> Valor = ${res}`
                        if (res < 0) { // se o resultado for negativo, altera o sinal no vetor de sinais
                            //info.innerHTML += '<br> Negativo'
                            counts[p_sum] = res * (-1)
                            oper[p_sum - 1] = ' - '
                        } else {
                            //info.innerHTML += '<br> Positivo'
                            counts[p_sum] = res
                            oper[p_sum - 1] = ' + '
                        }
                    }
                } else {
                    counts[p_sum] = Number(counts[p_sum]) + Number(counts[p_sum + 1])
                }
                counts.splice(p_sum + 1, 1)
                oper.splice(p_sum, 1)

                p_sum = oper.indexOf(' + ')
                //info.innerHTML += `<br> Val = ${counts} <br> Ope = ${oper} `
            }


            let p_sub = oper.indexOf(' - ')     // Realiza a subtração
            while (p_sub != -1) {
                //info.innerHTML += `<br><br>Subtração`
                if (p_sub > 0) {    // Verificar se o primeiro valor é negativo (o Segundo não precisa)
                    if (oper[p_sub - 1] == ' - ') {   // Se o 1º for neg, inverte seu sinal
                        let res = Number((counts[p_sub]) * (-1) - counts[p_sub + 1])
                        if (res < 0) { // se o resultado for negativo, altera o sinal no vetor de sinais
                            counts[p_sub] = res * (-1)
                            oper[p_sub - 1] = ' - '
                        } else {
                            counts[p_sub] = res
                            oper[p_sub - 1] = ' + '
                        }
                    }
                } else {
                    counts[p_sub] = Number(counts[p_sub] - counts[p_sub + 1])
                }
                counts.splice(p_sub + 1, 1)
                oper.splice(p_sub, 1)

                p_sub = oper.indexOf(' - ')
                //info.innerHTML += `<br> Val = ${counts} <br> Ope = ${oper} `
            }

            n = counts.length                   // Teste para finalização das operações 
            if (n == 1) {
                validador = 0
            }
        }

        this.txt = counts
        return [this.txt]
    }
}
export default calculator
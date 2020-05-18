let values = [1,2,3,4,5]
let operation = [' + ', ' * ', ' - ', ' / ']



let validador = 0
let len = values.length
let counts = []
/*for (let i = 0; i < len; i++) {
    counts[i] = values[i];
}*/
let oper = operation

counts = values

if (len > 1){             //Verificar se tem elementos suficientes para rezlizar alguma operação
    validador = 1
}

console.log(`counts = ${counts}`)
console.log(`values = ${values}`)

counts.splice(2,1)

console.log(`counts = ${counts}`)
console.log(`values = ${values}`)



/*console.log(`values = ${values}`)
console.log(`operatin = ${operation}`)
console.log(`counts = ${counts}`)
console.log(`oper = ${oper}`)
console.log('####################')

while (validador == 1) {
    


    let p_mult = oper.indexOf(' * ')       // realiza a multiplicação
    if (p_mult != -1) {
        counts[p_mult] = counts[p_mult] * counts[p_mult+1]  
        counts.splice(p_mult+1, 1)      // Remove o segundo elemento da multiplicação
        oper.splice(p_mult, 1)     // Remove a multiplicação realizada
        console.log(`counts = ${counts}`)
        console.log(`values = ${values}`)
    }
    
    let p_div = oper.indexOf(' / ')       // realiza a divisão
    if (p_div != -1) {
        counts[p_div] = counts[p_div] / counts[p_div+1]  
        counts.splice(p_div+1, 1)      // Remove o segundo elemento da multiplicação
        oper.splice(p_div, 1)     // Remove a multiplicação realizada
        console.log(`counts = ${counts}`)
        console.log(`values = ${values}`)
    }

    let p_sum = oper.indexOf(' + ')
    if (p_sum != -1) {
        counts[p_sum] = counts[p_sum] + counts[p_sum+1]  
        counts.splice(p_sum+1, 1)      // Remove o segundo elemento da multiplicação
        oper.splice(p_sum, 1)     // Remove a multiplicação realizada
        console.log(`counts = ${counts}`)
        console.log(`values = ${values}`)
    }


    let p_sub = oper.indexOf(' - ')
    if (p_sub != -1) {
        counts[p_sub] = counts[p_sub] - counts[p_sub+1]  
        counts.splice(p_sub+1, 1)      // Remove o segundo elemento da multiplicação
        oper.splice(p_sub, 1)     // Remove a multiplicação realizada
        console.log(`counts = ${counts}`)
        console.log(`values = ${values}`)
    }
    
    n = counts.length                   // Teste para finalização das operações 
    if (n == 1 || p_mult == -1 || p_div == -1 || p_sum == -1 || p_sub == -1) {
        validador = 0
        console.log(`counts = ${counts}`)
        console.log(`values = ${values}`)
    }
}

console.log(`values = ${values}`)
console.log(`operatin = ${operation}`)
console.log(`counts = ${counts}`)
console.log(`oper = ${oper}`)*/

console.log(`counts = ${counts}`)
console.log(`values = ${values}`)
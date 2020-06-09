function saida () {             // Control of the information that will be shown 
    if (notnumber == 1) {
        display.innerHTML = 'Insira um valor!'
    } else if (notnumber == 2 ){
        display.innerHTML = 'not running!'
    } else if (notnumber == 3 ){
        display.innerHTML = `${result}`
    } else {
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
        resp += values[n-1]
    } else {
        for (let i = 0; i < n; i++) {
            resp += values[i] + operation[i]
        }
    }
    histor.innerHTML = `${resp}`
}
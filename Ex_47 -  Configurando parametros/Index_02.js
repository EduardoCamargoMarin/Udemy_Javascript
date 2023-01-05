//argumentos são os que estão sendo executados na função

function price() { // não é necessário definir a quantidade de argumentos no ()
    let total = 0
    for (let value of arguments)
    total +=value
    return total //pega todos os resultados dos argumentos
}

console.log(price(10,20,30,50,90)) // se não passar todos os resultados o resultado da como NaN


function carLoan(loan, rate, years) {
    return (loan * rate / 100 * years) + loan // a função retorna esse calculo
}

console.log(carLoan(20000, 17, 5)) // a partir desses parametros
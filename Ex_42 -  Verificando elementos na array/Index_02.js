
const tempLondon = [18, 13, 8, 2]

const tempPositive = tempLondon.every(function(value) { //buscou na tempLondon e puxou a função, verificou todos os numeros
return value >= 0

})

console.log(tempPositive)
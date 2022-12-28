

function percentage10(price) {
  return price - (price * 10 /100)
  //O comando return guarda o resultado para chamar ele fora da função, sem o return o resultado da como undefined
}

let total = percentage10(20)
console.log(total)

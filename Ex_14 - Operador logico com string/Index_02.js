
let corCliente = undefined // caso o cliente não se interesse por cor
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque // vai ler da esquerda para a direita

console.log(corVendida)
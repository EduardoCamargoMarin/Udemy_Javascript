

let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor

console.log('Pode Votar: ' + podeVotar)

let podeViajar = !podeVotar
console.log('Pode Viajar: ' + podeViajar)

// && - and
// || - or
// ! - not

let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function init() {
   computerNumber =  Math.floor(Math.random() * 100 + 1)  //criar algo randomico e arredondado

}

function compareNumbers() {
   const userNumber = Number(document.getElementById('inputBox').value) //pegando o valor que você digitar -- precisa ser um numero
   userNumbers.push('' + userNumber) // colocar o valor que colocou dentro da variavel userNumbers
   document.getElementById('guesses').innerHTML = userNumbers

   if(attempts < maxGuesses) {
    if(userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is too high'
        document.getElementById('inputBox').value = '' //esvazia o valor que você digitou
        attempts++ //adicionar mais um
        document.getElementById('attempts').innerHTML = attempts
    
       }
       else if (userNumber < computerNumber){
        document.getElementById('textOutput').innerHTML = 'Your number is too low'
        document.getElementById('inputBox').value = ''
        attempts++ //adicionar mais um
        document.getElementById('attempts').innerHTML = attempts
    
       }
       else {
        document.getElementById('textOutput').innerHTML = '\^-^/ Congratulations \^-^/'
        attempts++ //adicionar mais um
        document.getElementById('attempts').innerHTML = attempts
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') // some com o input para continuar digitando
    
       }
    
    }
    else{
        document.getElementById('textOutput').innerHTML = 'You lose! The number was' +computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
   }

   
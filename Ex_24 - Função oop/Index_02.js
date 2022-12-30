//Variaveis relacionadas

let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306
let chap1 = 'The fundamentals'
let chap2 = 'First law'

//--------------------------------------------------

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'The fundamentals',
        chap2: 'First law',
        },   //precisa ter a virgula após as chaves para executar a função corretamente.
        printBook: function() {
            console.log('printing....')
        }
    }
//chamando a função dentro do objeto
book.printBook()





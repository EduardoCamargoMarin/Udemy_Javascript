//Variaveis relacionadas

let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306
let chap1 = 'The fundamentals'
let chap2 = 'First law'
 
//--------------------------------------------------

function creatBook(title, author, pages) {  //Factory é uma função onde tem um objeto o qual eu posso modificar caso tenha mais objetos similares.
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        }
        return book
}






// Varias linhas de codigo depois!!!!

const book1 = creatBook('Atomic Habits', 'James Clear', 306)
const book2 = creatBook('Think', 'Napolean', 450)

console.log(book1)
console.log(book2)









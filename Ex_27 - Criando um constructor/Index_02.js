//Variaveis relaciona
function CreatBook(title, author, pages) {  //Factory é uma função onde tem um objeto o qual eu posso modificar caso tenha mais objetos similares.
        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookPages = pages
}
        //return book - não precisa quando usa o constructor

// Varias linhas de codigo depois!!!!


const book1 = new CreatBook('Atomic Habits', 'James Clear', 306)

console.log(book1)









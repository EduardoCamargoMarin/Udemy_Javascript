//Variaveis relaciona
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
book1.color = 'White' //Adicionando propriedades em apenas o objeto selecionado depois de ter sido criado.
book1.gift = 'MarkBook Included'

console.log(book1)









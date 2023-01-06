
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color') //aparecer o nome da cor

btn.addEventListener('click', function(){ //evento ao clicar, substitui o onclick
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor] //aparece na tela do <span>

   
})

function getRandomColor () {
    return Math.floor(Math.random() * colors.length)  
    //gera um numero randomico e o floor arrendonda para baixo e usa o colors.lenght para deixar dinamico.
}
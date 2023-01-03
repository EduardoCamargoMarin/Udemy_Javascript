
const tempLondon = [18, 13, 8, 2, -13, -20]


const tempPositive = tempLondon.filter( value => 
    value <= 0         

    ) // filtro dos valores da array, mas com arrow function

    //const tempPositive = tempLondon.filter(function(value) { //filtra os valores da condição.
        //return value <= 0})




console.log(tempPositive)
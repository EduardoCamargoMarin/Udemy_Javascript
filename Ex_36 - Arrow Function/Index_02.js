const movies = [

{id:1, movieName: 'Dejavu'},
{id:2, movieName: 'Back to the future'},
{id:3, movieName: 'The Matrix'}

]

//console.log(movies.includes({id:1, movieName: 'Dejavu'})) -- Não funciona porque tem mais de uma entrada de dados,

//Para funcionar, precisa criar uma function que retorne o valor que você deseja.

//arrow function, mais curto e mais bonito... o => indica que o (function e o return já esta incluso).
console.log(movies.find( 
    movie =>  movie.movieName === 'The Matrix'
))
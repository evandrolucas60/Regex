const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) //  não define uma range

console.log(texto.match(/[A-z]/g)) // intervalos usam a order da tabela UNICODE

// O intervalo tem que respeitar a ordem da tabela UNICODE
//console.log(texto.match(/[a-Z]/g))
//console.log(texto.match(/[4-1]/g))

const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) // Não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // isso é um intervalo válido

// Não é um intervalo (range)..

console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

//pode precisar de escape dentro do conjunto: - [] ^
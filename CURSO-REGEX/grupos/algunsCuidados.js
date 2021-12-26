const texto = 'Pedrinho  (filho do Pedro Silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)) //não é um grupo pois dentro de um conjunto [] não existe caractere especial
console.log(texto.match(/([abc])/gi)) // é um gurpo
console.log(texto.match(/(abc)/gi))
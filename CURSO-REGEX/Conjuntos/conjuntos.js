const texto = '1,2,3,4,5,6,7,8,9, a.b c!d?e'


// para definir classes (ou conjuntos) de caracteres usa []
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'
const regexComESemAcentos = /n[aã]/g
console.log(texto2.match(regexComESemAcentos))
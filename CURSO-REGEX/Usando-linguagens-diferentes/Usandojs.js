const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('1')
console.log('Metódos da RegEXp...')
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const texto = `
Lista telefonica:
- (11) 98756-1212
- 97914-5281
- (85) 99999-7766
- (21)3262-8899
- (1) 4321-1234
`

console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))
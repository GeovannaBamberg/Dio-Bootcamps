// este const com objeto descrut
const {gets, print} = require('./funcoes-auxiliares')
const quantidadeAlunos = gets()
let maiorValor = 0
for (let index = 0; index < quantidadeAlunos; index++) {
    const numeroSorteado = gets();
    numeroSorteado > maiorValor? maiorValor=numeroSorteado:maiorValor=maiorValor
    print(numeroSorteado)
}
print(maiorValor)
print(quantidadeAlunos)

 
//print(gets())
/* destruir objeto
const pessoa = {
    nome: 'geovanna'
}
const {nome} = pessoa
*/
//console.log(funcoes.gets())

/* Outra forma de exportar diretamente:

const funcoes = require('./funcoes-auxiliares')
console.log(funcoes.gets())
*/
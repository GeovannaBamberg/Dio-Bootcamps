/* const geovanna = {
    nome: "Geovanna Teixeira Bamberg da Silva",
    idade: 24,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    } 
}

console.log(geovanna.nome)
console.log(geovanna.idade)
console.log(geovanna)

geovanna.descrever()

geovanna.descrever= function(){
    console.log(`Meu nome é ${this.nome}`)
}
geovanna.descrever()

const atributos = "idade"

console.log(geovanna['nome'])

geovanna["nome"]= 'teste'

console.log(geovanna['nome'])
*/

// Classe é definição daquele objeto e instacia é ocorrencia daquele objeto
class pessoa{
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2022-idade
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
} 

/*
console.log(vitor)
console.log(geovanna)

vitor.descrever() */

function  compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }else if (p2.idade>p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }else{
        console.log(`${p2.nome}tem mesma idade ${p1.nome}`)
    }
}

const vitor = new pessoa('Vitor', 25)
const geovanna = new pessoa('Geovanna', 24)

vitor.descrever()
compararPessoas(geovanna, vitor)

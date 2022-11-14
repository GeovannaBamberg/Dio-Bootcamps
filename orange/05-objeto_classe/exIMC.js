/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa{
    altura;
    peso;
    idade;

    constructor(altura, peso, idade){
        this.altura = altura
        this.peso = peso,
        this.idade = idade
    }

    calculadoraImc(){
        return this.peso/(this.altura^2)
    }
    tabelaImc() {
        const imc = this.calculadoraImc()
    
        if (imc<18.5) {
            return ("Abaixo do peso")
        } else if ((imc>=18.6) && (imc<=24.9)){
            return ("Saudavel")
        }else if((imc>=25) && (imc<=29.9)){
            return ("Acima do peso")
        }else if((imc>=30) && (imc<=39.9)){
            return ("Obesidade")
        }else{
            return ("Obesidade Mórbida")
        }
            
    }
}


const geovanna= new Pessoa(1.70, 114, 24)


/*
class testePessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new testePessoa('Renan', 30);
console.log(descreverPessoa(renan));

*/

const nomeElemento = 'geovanna'
const idadeElemento = 40
class testPessoa2 {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new testPessoa2('Renan', 30).descrever();
new testPessoa2(nomeElemento, idadeElemento).descrever();
new testPessoa2('R', 37).descrever();
new testPessoa2('M', 48).descrever();
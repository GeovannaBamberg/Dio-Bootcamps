/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro{
    marca;
    cor;
    consumoGasolinaPorKMLITRO;

    constructor(marca, cor, consumoGasolinaPorKMLITRO){
        this.marca = marca
        this.cor = cor
        this.consumoGasolinaPorKMLITRO=consumoGasolinaPorKMLITRO
    }
    precoCombustivelPorKmH(precoUmLitroGasolina, distanciaKm) {
        const valorConsumoCombustiveldaViagem = (distanciaKm/this.consumoGasolinaPorKMLITRO)*precoUmLitroGasolina
        console.log(`O carro ${this.cor} ${this.marca} consome em media ${this.consumoGasolinaPorKMLITRO} por kml rodado, valor da gasolina: ${precoUmLitroGasolina}`)
        console.log(`Foram gastos ao total ${valorConsumoCombustiveldaViagem.toFixed(2)} reais`)
    }
}

const gol = new Carro ('gol', 'amerelo', 13.3) 
const hyundai = new Carro('hb20', 'prata', 14.6)
const geovanna = new Carro('gg','branco', 17.5)

gol.precoCombustivelPorKmH(7.9, 150)
hyundai.precoCombustivelPorKmH(7.9, 150)
geovanna.precoCombustivelPorKmH(7.9, 150)


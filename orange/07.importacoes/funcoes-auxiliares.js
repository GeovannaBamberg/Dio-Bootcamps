const entradas = [5, 50, 10,98,23,1000, 2000, 200, 555,505]
let i =0;
function gets() {
    const valor = entradas[i];
    i++
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print}

// também poderia ser:
//module.exports.gets=gets
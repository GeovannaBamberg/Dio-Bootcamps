const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

fetch(url)
.then((response) => response.json())
 /*   .then(function(responseBody) {
        console.log(responseBody)
    })*/
.then((jsonbody)=> console.log(jsonbody))
.catch((error)=> console.log(error))
.finally(() => console.log('Requisição Concluida!'))

/* try{

}catch{

}finally{

}
*/


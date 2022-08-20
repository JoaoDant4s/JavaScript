//Typecasting
console.log(Number("9") + 5)
let string = "123"
console.log(Number("9") + 5)
let number = 5 + 7
console.log(String(9 + 5))

//contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = "inconstitucionalmente"
console.log(word.length)
let number1 = 345365464654
console.log(String(number1).length)

//transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
let number3 = 2543543.2345324
console.log(number3.toFixed(2).replace(".", ","))

//Transform uppercase to lowercase
let word2 = "Programar é LINDOOO!"
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())

/*Separe um texto que contem espaços, em um novo array onde cada texto é uma posição
do array. Depois disso, transforme o array em um texto e onde ram espaços, coloque "_*/
let phrase = "Deus vai guiar viagem marcada só com a ida"
let myArray = phrase.split(" ")
console.log(myArray)
let transformed_phrase = myArray.join("_")
console.log(transformed_phrase.toUpperCase())

//Buscando palavra especifica
let phrase2 = "Queria te dar o mundo mas meu mundo é você"
console.log(phrase2.includes("mundo"))

//Criando array com constructor
let array = new Array("a", "b", "c")
let empty_array = new Array(10)
console.log(array)
console.log(empty_array)

//Contar elementos do array
console.log([
    "teto",
    "matue",
    "wiu",
    () => { return "complexo"}
][3]())
console.log([
    "teto",
    "matue",
    "wiu",
    () => { return "complexo"}
].length)

//transformar uma cadeia de caracteres em um elemento de um array

let word3 = "otorrinolaringologista"
console.log(Array.from(word3))


//manipulação de array
let techs = ["html", "css", "js"]

//adicionar um elemento no fim do array
techs.push("react.js")
//adicionar um elemento no inicio do array
techs.unshift("C++")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, techs.length))
//encontrar uma posição de um eçemento de um array
let index = techs.indexOf("css")
//remover um ou mais itens de qualquer posição do array
techs.splice(index, 1)

console.log(techs)

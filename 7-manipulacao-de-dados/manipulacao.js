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


//filter
const arr = [1, 2, 3, 4, 5]
const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
})

console.log(highNumbers)

const users = [
    {nome: "João", available: true},
    {nome: "Gigi", available: false},
    {nome: "Armando", available: false},
    {nome: "Berg", available: false}
]

const availables = users.filter((i) => {
    if(i.available == true){
        return i
    }
})
const notAvailables = users.filter((i) => !i.available)

console.log(availables)
console.log(notAvailables)

//map
const products = [
    {nome: "Camisa", price: 10.99, category: "Roupas"},
    {nome: "Chaleira elétrica", price: 149.90, category: "Eletro"},
    {nome: "Fogão", price: 1299.90, category: "Eletro"},
    {nome: "Calça Jeans", price: 99.90, category: "Roupas"}
]
products.map((product => {
    if(product.category == "Roupas"){
        product.onSale = true
    }
}))
console.log(products)

//destructuring
const fruits = ["Maçã", "Laranja", "Mamão"]
const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

const products_datails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = products_datails
console.log(`O nome do produto é ${productName}, custa R$${price} e pertence a categoria ${productCategory}`)

//7 spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]
console.log(a3)
const a4 = [0, ...a1, 4]
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 10000, price: 49000}

const car = {...carName, ...carBrand, ...otherInfos}
console.log(car)

//classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    setDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola v", 20)
console.log(shirt.name)
console.log(shirt.setDiscount(20))

//herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }
    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}
const hat = new ProductWithAttributes("Chapéu", 39.90, ["Preto", "Azul", "Verde"])
console.log(hat.setDiscount(30))
hat.showColors()

/* 
    3 palavras reservadas para criar uma variável:
        * var - global e local, tem o conceito de hoisting
        * let - local, so existe dentro de algum escopo: { }
        * const
*/

var name = "João"
let age = 20, isHuman = true

console.log(`    Meu nome é: ${name}
    Minha idade é: ${age}
    Eu sou humano? ${isHuman}
`)

const person = {
    name2: "Ana",
    age2: 55,
    weight: 60,
    skin: "Parda"
}
console.log(person.name2, person.age, person.weight, person.skin)

const animals = [
    "LION",
    "MONKEY",
    "CAT",
    {
        name3: "Batata",
        age3: 3
    }
]

console.log(animals)
console.log(animals[3].name3)
console.log(animals.length)

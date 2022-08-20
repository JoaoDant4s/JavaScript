
/* 
    3 palavras reservadas para criar uma variável:
        * var - global e local, tem o conceito de hoisting
        * let - local, so existe dentro de algum escopo: { }
        * const
*/

// 1. Declare uma variavel de nome weight
let weight

// 2. que tipo de dado é a varíavel acima?
// undefined


// 3. Declare uma variável e atribua valores para cada um dos dados:
/*
    * name: string
    * age: number (inteiro)
    * stars: number (float)
    * isSubscribed: Boolean
*/
const name = "João", age = 20, stars = 4.5, isSubscribed = true

let student = {}

student = {
    name2: "João",
    age2: 20,
    weight: 58,
    stars: 3.7,
    isSubscribed: false
}
console.log(`${student.name2}, de idade ${student.age2} pesa ${student.weight}.`)

let array = []

array = [
    student
]

console.log(array)

console.log(array[0])

const student2 = {
    name3: "Roberto",
    age3: "25",
    weight3: 56,
    stars3: 5.4,
    isSubscribed3: false
}
array[1] = student2
console.log(array)


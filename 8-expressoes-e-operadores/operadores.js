/*
Expressões e Operadores

-Expressions
-Operators
    Binary: 1 + 1
    Unary: ++numero, --numero
    Ternary: true ? "aa" : "bb"
*/
let number = 1;

/*
O ponto e virgula faz falta quando usa funções auto executaveis
(() => {
    console.log("alo")
})()
*/

let name1 = new String("João")
name1.surName = "Dantas"
let age = new Number(23)

let date = new Date("2022-08-21")
console.log(name1.surName, age, date)

//delete deleta um atributo de um objeto

const person = {
    name: "João",
    age: 20
}
delete person.age

console.log(person)

/*  Operador ternário
    Condição então valor 1 se não valor 2
    condição ? value1 : value2
*/
const age2 = 32
const can_drive = age >= 18 ? "Can drive" : "Can't drive"
console.log(can_drive)

// Falsy e truthy
/* 
    false
    0
    -0
    ""
    null
    undefined
    NaN
 */
/* 
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
 */

console.log(0 ? "verdadeiro" : "falso")
console.log([] ? "verdadeiro" : "falso")
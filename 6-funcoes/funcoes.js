function print_phrase() {
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é mãe do aprendizado")
}
const sum = function(number1, number2) {
    return number1 + number2
}
function make_juice(fruta1, fruta2){
    return fruta1 + fruta2
}

print_phrase()

let number1 = 24
let number2 = 45


console.log(`O número 1 é: ${number1}`)
console.log(`O número 2 é: ${number2}`)
console.log(`A soma é: ${sum(number1, number2)}`)

const cup = make_juice("banana", "maçã")
console.log(cup)

//function scope

let subject = "History"
function createThink(subject){
    subject = "Math"
    return subject
}


console.log(subject)
console.log(createThink(subject))

//hosting

sayMyName()

function sayMyName(){
    console.log("João")
}

//arrow function

const sayMyName1 = () => {
    console.log("João Batista")
}

sayMyName1()

//callback function

function sayMyName3(name){
    console.log("Antes de executar a funcao callback")
    console.log(typeof name)
    name()
    console.log("Depois de executar a funcao callback")
}
sayMyName3(
    () => {
        console.log("Estou em uma callback")
    }
)

//constructor

function Person(name2) {
    this.name = name2
    this.walk = () => {
        return this.name + " está andando"
    }
}
const joao = new Person("João Batista Serino Dantas")
const daniel = new Person("Daniel Silva")
console.log(joao.walk())
console.log(daniel.walk())

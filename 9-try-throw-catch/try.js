//throw

function sayMyName(name) {
    if (name === "") {
        throw "Nome é obrigatório"
    }
    console.log(name)
}

//se tentar chamar a função fora do try vai dar erro de uncaught, ou seja, nao foi pego pelo catch
try {
    sayMyName("João")
} catch(e) {
    console.log(e)
}

//loopings (for of e for in)
let name = "João"
let names = ["Pedro", "Rafael", "Henrique", "João"]
let result;
for(let name of names){
    name == "Rafael" ? console.log("Encontrei!") : console.log("Não encontrei...")
}

let person = {
    name2: "Matheus",
    age: 35,
    weight: 54
}
for(let property in person) {
    console.log(property)
    console.log(person[property])
}
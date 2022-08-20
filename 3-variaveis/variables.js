
/* 
    3 palavras reservadas para criar uma variável:
        * var - global e local, tem o conceito de hoisting
        * let - local, so existe dentro de algum escopo: { }
        * const
*/
var clima = "Quente"
clima = "frio"
clima = 67

let ceu = "Azul"
ceu = 34

/* Não pode mudar valor de variavel constante*/

const status = "dormindo"

console.log(clima)
console.log(ceu)
console.log(typeof clima)
console.log(typeof status)

/*block statement 
 {
    dentro das chaves coloca conteudo
 }
*/
console.log("existe y antes do bloco?", y)
{   
    var y = 10
    let x = 0
    console.log(x)
}
console.log("existe y depois do bloco?", y)
console.log(x)
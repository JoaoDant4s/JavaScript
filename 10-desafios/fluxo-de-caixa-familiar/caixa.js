let caixa = new Object()

caixa.receitas = [234.00, 453.56, 123.23]
caixa.despesas = [123.43, 234.46, 111.56]

function calc(caixa) {
    let saldo = 0
    for(let receita of caixa.receitas){
        saldo += receita
    }
    for(let despesa of caixa.despesas){
        saldo -= despesa
    }
    if(saldo < 0){
        console.log(`
            A família ta na merda...
            Saldo: ${saldo.toFixed(2)}
        `)
    } else {
        console.log(`
            A família ta bala ein!
            Saldo: ${saldo.toFixed(2)}
        `)
    }
}

calc(caixa)
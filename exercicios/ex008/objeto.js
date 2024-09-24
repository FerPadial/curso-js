/*OBJETO*/
let pessoa = {nome:'José',
    genero:'M', 
    peso:65.5,
    engordar(p=0){
        console.log(`Engordou ${p}`)
        this.peso += p
    }
}

pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}kg`)
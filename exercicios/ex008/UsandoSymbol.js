//Objeto tipo Symbol tem um identificador unico
//sempre que precisar gerar um indentificador unico pra um elemento
//Symbol só é usado no javascript, não da pra usar no DOM

const s1=Symbol()
const s2=Symbol()
const s3=Symbol.for("bruno")
const s4=Symbol.for("bruno")
const s5=Symbol.for("canal")

console.log(s1==s2) //retorna false
console.log(s3==s4) //retorna true

console.log(Symbol.keyFor(s1))  //retorna undefined pq não foi definido uma chave global
console.log(Symbol.keyFor(s3))  //retorna a chave global = bruno
console.log(Symbol.keyFor(s5))  //retorna a chave global = canal

class jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[
    new jogador("j1"),
    new jogador("j2"),
    new jogador("j3"),
    new jogador("j4"),
    new jogador("j1"),
    new jogador("j3")
]

let sj1=jogadores[2].id
jogadores=jogadores.filter((j)=>{
    return j.id!=sj1
})

console.log(jogadores)
console.log(sj1)

let s=[]
let s_jogadores=jogadores.filter((j)=>{
    return j.nome=="j1"
})

s=s_jogadores.map((j)=>{
    return j.id
})

console.log(s_jogadores)
console.log(s)


const nome=Symbol("nome")
const numero=Symbol("nome")
const corUniforme=Symbol("nome")

const Jogador={
    [nome]:"j1",    //usando colchetes ele referencia o Symbol nome e não fica mais explicito
    numero:10,
    corUniforme:"Amarelo"
}

for (let p in Jogador){
    console.log(p)
}

console.log(nome)  
console.log(nome.description)
console.log(Jogador.nome)  //uma vez usando colchetes que referencia o Symbol tem que mudar a notação caso contrario vai aparece undefined
console.log(Jogador[nome])  //uma vez usando colchetes que referencia o Symbol tem que mudar a notação pra aparecer =>  Jogador[nome]
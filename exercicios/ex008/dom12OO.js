//conceito de herança
class Carro{  //Classe Pai
//implementa as funções basicas da classe

    constructor(nome, portas){
        this.nome=nome
        this.portas=portas
        this.ligado = false
        this.vel=0
        this.cor = undefined
    }

    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome,portas)
        this.blindagem=true
        this.municao=municao
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1=new Carro('Normal',4)
c1.ligar()
c1.setCor('Preto')

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("------------------------------------")

const c2=new Militar('Tanque',1,'Sim',50)
c2.ligar()
c2.setCor('Verde')
c2.atirar()

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado?"Sim":"Não"}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem?"Sim":"Não"}`)
console.log(`Munição: ${c2.municao}`)
console.log("------------------------------------")
//qdo eu tenho uma classe abstratada ela não pode ser instanciada ela só serve de base para ser extendida para outras classes, usada só pro conceito de herança

//capacidade de um mesmo metodos ter ações distintas comportamentos diferentes

//Posso tambem tornar obrigatório de que seja implementado um metodo ou propriedade pela classe que recebem a herança da classe abstrata

class CarroPadrao{
    constructor(){
        if(this.constructor===CarroPadrao){
            throw new TypeError("Esta Classe é ABSTRATA - Não pode ser instanciada")
        }
        if(this.ligar===undefined){
            throw new TypeError("É OBRIGATÓRIO implementar o método Ligar")
        }
        if(this.desligar===undefined){
            throw new TypeError("É OBRIGATÓRIO implementar o método Desligar")
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
}


class Carro extends CarroPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo=new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome="normal"
        } else if(tipo==2){
            this.velMax=160
            this.nome="esportivo"
        } else if(tipo==3){
            this.velMax=200
            this.nome="super esportivo"
        } else {
            this.velMax=100
            this.nome="utilitário"
        }

        this.velMax+=this.turbo.pot
    }

    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo.pot)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log('------------')
    }
    ligar(){this.ligado=true}
    desligar(){this.ligado=false}
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        } else if(e==1){
            this.pot=50
        } else if(e==2){
            this.pot=75
        } else if(e==3){
            this.pot=100
        } else {
            this.pot=0
        }
    }
}

class carroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo=1
        this.velMax=300+this.turbo.pot
        this.nome="Carro especial"
    }
    //aqui entra o conceito do polimorfismo funcoes com mesmo nome que tem comportamentos diferentes, então esse substitui a função da classe pai
    info(){
        //se quiser chamar a função info da classe pai usa o super
        //super.info()
        if(this.tipoInfo==1){
            super.info()
        } else {
            console.log(`Nome: ${this.nome}`)
            console.log(`Vel. Maxima: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo.pot}`)
            console.log('------------')
        }

    }
}


//criando os carros
const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new carroEspecial(3)
//const c4 =new CarroPadrao()   //esta classe é abstrata Não pode ser instanciada então essa instrução tem que resultar em erro conforme Throw

c1.ligado=true
c3.ligado=true

c1.info()
c2.info()
c3.info()
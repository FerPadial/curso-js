//capacidade de um mesmo metodos ter ações distintas comportamentos diferentes

class Carro{
    constructor(tipo,estagioTurbo){
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
        console.log('------------')
    }
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
        this.tipoInfo=2
        this.velMax=300+this.turbo.pot
        this.nome="Carro especial"
    }
    //aqui entra o conceito do polimorfismo funcoes com mesmo nome que tem comportamentos diferentes, então esse substitui o da classe pai
    info(){
        //se quiser chamar o info da classe pai usa o super
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

c1.info()
c2.info()
c3.info()
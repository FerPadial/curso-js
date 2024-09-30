class carro{
    constructor(pnome,ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo='Esportivo'
            this.velmax=300
        } else if(ptipo==2){
            this.tipo='Utilitário'
            this.velmax=100
        } else if(ptipo==3){
            this.tipo='Passeio'
            this.velmax=160
        } else {
            this.tipo='Militar'
            this.velmax=180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo 
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }

    setNome(nome){
        this.nome = nome
    }

    info(){
        console.log(`Nome.: ${this.nome}`)
        console.log(`tipo.: ${this.tipo}`)
        console.log(`V.Max.: ${this.velmax}`)
        console.log(`--------------------`)
    }
}

let c1=new carro("Rapidão",1)
let c2=new carro("Super Luxo",2)
let c3=new carro("Bombadão",3)
let c4=new carro("Carrega Tudo",4)

c1.setNome("Super Veloz")

console.log(c1.getInfo())
console.log(c1.getInfo()[0])

// c1.info()
// c2.info()
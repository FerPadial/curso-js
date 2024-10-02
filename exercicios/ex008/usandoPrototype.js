//serve p/ qdo precisar adicionar uma propriedade ou metodo principalmente p/ objetos de função

const Nave=function(energia){
    this.energia=energia
    this.disparos=100
}

const n1=new Nave(100)


//uso de prototype acontece sempre depois da construção da classe
//adicionando novas propriedades
Nave.prototype.vidas=3

//adicionando novos metodos
Nave.prototype.disparar=function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

console.log(Nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)
console.log(n1.disparos)

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(n1.disparos)


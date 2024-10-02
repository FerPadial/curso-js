class Npc{
    static alerta=false  //qdo defino um membro como static estou dizendo que ele pertence à classe e não às suas instancias
    constructor(energia){
        this.energia=energia
        this.alerta=false
    }

    info=function(){
        console.log(`Energia: ${Npc.energia}`)
        console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`)
        console.log("-------------------------")
    }
    static alertar=function(){
        Npc.alerta=true
    }
}

const npc1=new Npc(100)
const npc2=new Npc(100)
const npc3=new Npc(100)

npc1.alerta=true
// npc2.alerta=true
// npc3.alerta=true

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()

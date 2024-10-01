const f_tipoMilitar=document.querySelector('#f_tipoMilitar')
const f_tipoNormal=document.querySelector('#f_tipoNormal')
const f_blindagem=document.querySelector('#f_blindagem')
const f_municao=document.querySelector('#f_municao')
const f_nome=document.querySelector('#f_nome')
const f_portas=document.querySelector('#f_portas')
const carros=document.querySelector('#carros')
const btn_addCarro=document.querySelector('#btn_addCarro')

let a_carros=[]

const removerCarro=(quem)=>{
    a_carros=a_carros.filter((el)=>{
        return el.nome != quem
    })
}

f_tipoMilitar.addEventListener('click',(evt)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')

    f_nome.focus()
})

f_tipoNormal.addEventListener('click',(evt)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute('disabled','disabled')
    f_municao.setAttribute('disabled','disabled')

    f_nome.focus()
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML=""
    a_carros.forEach((c)=>{
        const div=document.createElement('div')
        const btn=document.createElement('button')
        btn.addEventListener('click',(evt)=>{
            const quemRemover=evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        })
        div.setAttribute("class","carro")
        div.setAttribute("data-nome",c.nome)
        div.innerHTML=`Nome: ${c.nome}<br/>`
        div.innerHTML+=`Portas: ${c.portas}<br/>`
        if (f_tipoMilitar){
            div.innerHTML+=`Blindagem: ${c.blindagem}<br/>Munição:${c.municao}`
        }
        btn.innerHTML='Remover'
        carros.appendChild(div)
        div.appendChild(btn)
    })

}

btn_addCarro.addEventListener('click',()=>{
    if(f_tipoNormal.checked){
        const c=new Carro(f_nome.value,f_portas.value)
        a_carros.push(c)
    } else {
        const c=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)

        console.log|(f_municao.value)

        a_carros.push(c)  
    }
    gerenciarExibicaoCarros()

    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0

    f_nome.focus()
})


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
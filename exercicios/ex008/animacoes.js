const carro=document.getElementById("carro")
// const btn_esquerda=document.getElementById("btn_esquerda")
// const btn_direita=document.getElementById("btn_direita")
const btn_parar=document.getElementById("btn_parar")
const btn_rodar=document.getElementById("btn_rodar")

let anima=null 
let tamMax = null

let tamCarro=null
let dir=0

const init=()=>{
    carro.style="position:relative;left:0px;width:100px;height:40px"
    //carro.style.left="0px"
    //tamMax = window.innerWidth - parseInt(carro.style.width)
    tamMax=window.innerWidth - tamCarro

}

window.addEventListener("load", init())   //ou pode se assim window.onload=init()

const move=()=>{
    if (parseInt(carro.style.left) >= tamMax){
        dir=-1
    } else if (parseInt(carro.style.left) <= 0){
        dir=1
    }
    carro.style.left=parseInt(carro.style.left) + (10*dir) + 'px'
    anima=setTimeout(move,20)
}


// const move=(dir)=>{
//     carro.style.left=parseInt(carro.style.left) + (10*dir) + 'px'
// }

// const moveTimeout=(dir)=>{
//     if (dir > 0) {
//         if (parseInt(carro.style.left) <= tamMax){
//             carro.style.left = parseInt(carro.style.left) + (10*dir) + 'px'
//             anima=setTimeout(moveTimeout,20,dir)
//         } else {
//             clearTimeout(anima)
//         }
//     } else if (dir < 0){
//         if (parseInt(carro.style.left) >= 0){
//             carro.style.left = parseInt(carro.style.left) + (10*dir) + 'px'
//             anima=setTimeout(moveTimeout,20,dir)
//         } else {
//             clearTimeout(anima)
//         }

//     }

//     console.log(tamMax)
// }

// btn_direita.addEventListener("click",(evt)=>{
//     //clearInterval(anima)
//     //anima=setInterval(move,20,1)  //setInterval cria um intervalo neste caso de 20 e 20 milisegundos ele chama a função passada como parametro, já o setTmeout chama a função uma vez só durante o tempo definido que tem que ser consecutivo usando recursividade 

//     clearTimeout(anima)
//     moveTimeout(1)
// })

// btn_esquerda.addEventListener("click",(evt)=>{
//     //clearInterval(anima)
//     //anima=setInterval(move,20,-1)
//     clearTimeout(anima)
//     moveTimeout(-1)
// })

btn_rodar.addEventListener("click",(evt)=>{
    move()
})

btn_parar.addEventListener("click",(evt)=>{
    //clearInterval(anima)
    clearTimeout(anima)

})

window.addEventListener("load",init())
window.addEventListener("resize",()=>{
    tamMax=window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener("keydown",(evt)=>{
    if(evt.code==="ArrowUp"){
        carro.style.width=parseInt(carro.style.width)+10+"px"
        carro.style.height=parseInt(carro.style.height)+10+"px"
    } else if(evt.code==="ArrowDown"){
        carro.style.width=parseInt(carro.style.width)-10+"px"
        carro.style.height=parseInt(carro.style.height)-10+"px"
    }

    tamCarro=parseInt(carro.style.width)
    tamMax=window.innerWidth - tamCarro
})


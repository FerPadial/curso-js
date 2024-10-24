const timer=document.querySelector('#timer')
const btn_iniciar=document.querySelector('#btn_iniciar')
const btn_parar=document.querySelector('#btn_parar')
const btn_zerar=document.querySelector('#btn_zerar')
const btn_parcial=document.querySelector('#btn_parcial')
const parciaisregistradas=document.querySelector('#parciaisregistradas')

let intervalo = null
let tmpini=null

const contador=()=>{
    const tmpatual=Date.now()
    let cont=tmpatual-tmpini
    let seg=Math.floor((tmpatual-tmpini)/1000)
    timer.innerHTML=converter(seg) 
}

const converter=(seg)=>{
    const hora=Math.floor(seg/3600)
    const resto=seg%3600 //obtem o resto da divisão
    const minuto=Math.floor(resto/60)
    const segundo=Math.floor(resto%60)

    const formatado=(hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+":"+(segundo<10?"0"+segundo:segundo)

    return (formatado)
}

btn_iniciar.addEventListener("click",(evt)=>{
    tmpini=Date.now()
    intervalo=setInterval(contador, 1000)
})

btn_parcial.addEventListener("click",(evt)=>{
    let parcial=timer.innerHTML
    parciaisregistradas.innerHTML+="<div>"+parcial+"</div>"
})

btn_parar.addEventListener("click",(evt)=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click",(evt)=>{
    tmpini=Date.now()
    timer.innerHTML="00:00:00"
    clearInterval(intervalo)
    parciaisregistradas.innerHTML=""
    
})
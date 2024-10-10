//retorna a posição e o tamanho dos elementos

const q1=document.getElementById("q1")
const q2=document.getElementById("q2")
const posx=document.getElementById("posx")
const posy=document.getElementById("posy")
const largura=document.getElementById("largura")
const altura=document.getElementById("altura")

// let DOMRect_q1 = q1.getBoundingClientRect()
// let DOMRect_q2 = q2.getBoundingClientRect()

const info=(el)=>{
    let DOMRect_q = el.getBoundingClientRect()
    posx.innerHTML=`posx: ${DOMRect_q.x}`
    posy.innerHTML=`posy: ${DOMRect_q.y}`
    largura.innerHTML=`largura: ${DOMRect_q.width}`
    altura.innerHTML=`altura: ${DOMRect_q.height}`
}

q1.addEventListener("click",(evt)=>{
    info(evt.target)  //evt.target é o proprio q1
})

q2.addEventListener("click",(evt)=>{
    info(evt.target) ///evt.target é o proprio q2
})
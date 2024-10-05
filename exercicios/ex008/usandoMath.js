// const mat=document.getElementById("mat")

// //Math() é uma biblioteca de classe statica então nã é necessario instanciar um objeto da classe Math()

// mat.innerHTML=Math.E
// mat.innerHTML=Math.PI

// const num = Math.random()*10
// mat.innerHTML=Math.floor(num)//retona um numero aleatorio entre 0 e 9 - a função floor pega a parte inteira do numero

const olhos=[...document.getElementsByClassName("olho")]

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener("mousemove",(evt)=>{
    posx_mouse=evt.clientX
    posy_mouse=evt.clientY

    const rot=Math.atan2(posy_mouse,posx_mouse) * 180 / Math.PI

    olhos.forEach((o)=>{
        o.style.transform="rotate("+rot+"deg)"
    })

    //console.log(`Pos X: ${posx_mouse} Pos Y: ${posy_mouse}`)
})


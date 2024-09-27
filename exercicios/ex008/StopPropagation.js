const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]
caixa1.addEventListener("click",(evt)=>{
    console.log(evt.target)
})

// btn_c1.addEventListener("click",(evt)=>{
//     evt.stopPropagation()

// })

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()
    })
})

console.log(caixa1.children[caixa1.children.length-1])
console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)

console.log(document.getRootNode())
console.log(cursos[0].getRootNode())

console.log(caixa1.hasChildNodes())
console.log(cursos[0].hasChildNodes())
console.log(cursos[0].childNodes)
console.log(cursos[0].children)

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")

if (cursos[0].children.length > 0){
    console.log('Possui filhos')
} else {
    console.log('Não Possui filhos')
}

if (caixa1.children.length > 0){
    console.log('Possui filhos')
} else {
    console.log('Não Possui filhos')
}

console.log(caixa1.firstElementChild.innerHTML="TESTE")
console.log(caixa1.lastElementChild.innerHTML="ULTIMO TESTE")

console.log(caixa1.children[3].innerHTML="TESTE MEIO")

console.log(btn_c1.parentNode.parentNode)
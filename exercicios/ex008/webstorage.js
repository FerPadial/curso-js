const f_texto=document.querySelector("#f_texto")
const p_texto=document.querySelector("#p_texto")
const btn_texto=document.querySelector("#btn_texto")

btn_texto.addEventListener("click",(evt)=>{

})

let num=10
let curso="JavaScript"
//window.localStorage.setItem("numero",num)
localStorage.setItem("numero",num)
localStorage.setItem("nome","Bruno")
localStorage.setItem("canal","CFB Cursos")
localStorage.setItem("curso", curso)

console.log(localStorage.getItem(localStorage.key("0")))
console.log(localStorage.length)
localStorage.clear()

sessionStorage.setItem("numero",num)
sessionStorage.setItem("nome","Bruno")
sessionStorage.setItem("canal","CFB Cursos")
sessionStorage.setItem("curso", curso)

//console.log(sessionStorage.getItem(sessionStorage.key("0")))
// console.log(sessionStorage.length)
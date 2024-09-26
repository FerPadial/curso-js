const divtodas = [...document.getElementsByTagName("div")] 
const todos = [...document.getElementsByClassName("curso")] /* transforma em array com spread ...*/
const todosc1  = [...document.getElementsByClassName("c1")] 
const todosc2  = [...document.getElementsByClassName("c2")]  
const especial  = document.getElementById("c1")  

const query_divs=document.querySelector("div")
console.log(query_divs)

const query_divs_all=[...document.querySelectorAll("div,p")]
console.log(query_divs_all)

const query_divs_comP=[...document.querySelectorAll("div > p")] /*Divs que tem P dentro delas*/
console.log(query_divs_comP)

const query_divs_soClass=[...document.querySelectorAll("div[class]")]  /* somente as Divs que tem o atributo Class*/
console.log(query_divs_soClass)

const query_cursos_all=[...document.querySelectorAll(".curso")]
console.log(query_cursos_all)

const cursoc1  = [...document.querySelectorAll(".c1,p")] 
console.log(cursoc1)

const cursoc2  = [...document.querySelectorAll(".c2")]  
console.log(cursoc2)

const special1  = document.querySelector("#c1")  
console.log(special1)

const special2  = document.querySelectorAll("#c1")[0]
console.log(special2)

// console.log(divtodas)
// console.log(todos)
// console.log(todosc1)
// console.log(todosc2)
// console.log(especial)

// todos.map((el)=>{
//     el.classList.add("destaque") /* adiciona a classe destaque */
// })

// todosc1.map((el)=>{ 
//     el.classList.add("destaque") /* adiciona a classe destaque somente quem tem a classe c1*/
// })
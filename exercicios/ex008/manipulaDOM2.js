const todos = [...document.getElementsByClassName("curso")] /* transforma em array com spread ...*/
const todosc1  = [...document.getElementsByClassName("c1")] 
const todosc2  = [...document.getElementsByClassName("c2")]  
const especial  = document.getElementsByClassName("curso")[0]  
console.log(todos)
console.log(todosc1)
console.log(todosc2)
console.log(especial)

// todos.map((el)=>{
//     el.classList.add("destaque") /* adiciona a classe destaque */
// })

todosc1.map((el)=>{ 
    el.classList.add("destaque") /* adiciona a classe destaque somente quem tem a classe c1*/
})
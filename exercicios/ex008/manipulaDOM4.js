
const msg=()=>{alert('Clicou!')}


//const c1 = document.getElementById("c1")
const c1 = document.querySelector("#c1")
c1.addEventListener("click",msg)
c1.addEventListener("click",()=>{alert('Clicou de novo!')})

c1.addEventListener("click",(evt)=>{
    const el=evt.target /*identifica quem disparou o evento*/
    el.classList.add("destaque")  /* adicionando destaque em quem disparou o evento */
})

/*adicionando evento click em todos os cursos */
const cursos=[...document.querySelectorAll(".curso")]
cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.innerText + ' foi clicado"')
    })
})
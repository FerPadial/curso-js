const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative' ]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoveCurso = document.getElementById("btnRemoverCurso")
const btnAdcionarNovoCursoAntes = document.getElementById("btnAdcionarNovoCursoAntes")
const btnAdcionarNovoCursoDepois = document.getElementById("btnAdcionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice=0
const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso

    const comandos = document.createElement("div")
    comandos.setAttribute('class','comandos')

    const rb=document.createElement("input")
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)

    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSelecionado=()=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]

    let radioSelecionado=todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    // if(rs!=undefined){
    //     const cursoSelecionado=rs.parentNode.previousSibling.textContent
    //     alert("Curso Selecionado: " + cursoSelecionado)
    // } else {
    //     alert("Selecione um curso!")
    // }
    try{
        const cursoSelecionado=rs.parentNode.previousSibling.textContent
    } catch(ex) {
        alert("Selecione um curso!")
    }

})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    if(rs!=undefined){
        const cursoSelecionado=rs.parentNode.parentNode
        cursoSelecionado.remove()
    } else {
        alert("Selecione um curso!")
    }
 
})

btnAdcionarNovoCursoAntes.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!=""){
        const cursoSelecionado=rs.parentNode.parentNode
        const novoCurso=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        } else {
            alert("Digite o nome do curso!")
        }
    } catch(ex) {
        alert("Selecione um curso!")
    }
})

btnAdcionarNovoCursoDepois.addEventListener("click",(evt)=>{
    const rs=radioSelecionado()
    try{
        if(nomeCurso.value!=""){
            const cursoSelecionado=rs.parentNode.parentNode
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        } else {
            alert("Digite o nome do curso!")
        }

    } catch(ex) {
        alert("Selecione um curso!")
    }   
})

// parentNode
// ChildNodes (nodenumber)
// firstChild
// lastChild
// nextSibling
// previousSibling
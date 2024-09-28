const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative' ]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoveCurso = document.getElementById("btnRemoverCurso")
const btnAdcionarNovoCursoAntes = document.getElementById("btnAdcionarNovoCursoAntes")
const btnAdcionarNovoCursoDepois = document.getElementById("btnAdcionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice=0

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute('id','c'+indice)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML=curso

    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado") //com a classe CSS selecionado p/ indicar que o elemento foi selecionado
    })

    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado=()=>{
    const cursoSelecionado=[...document.querySelectorAll(".selecionado")]
    return cursoSelecionado[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    try{
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    } catch(ex) {
        alert("Selecione um curso!")
    }

})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const cs=cursoSelecionado()
    if(cs!=undefined){
        cs.remove()
    } else {
        alert("Selecione um curso!")
    }
 
})

btnAdcionarNovoCursoAntes.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value!=""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        } else {
            alert("Digite o nome do curso!")
        }
    } catch(ex) {
        alert("Selecione um curso!")
    }
})

btnAdcionarNovoCursoDepois.addEventListener("click",(evt)=>{
     try{
        if(nomeCurso.value!=""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
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
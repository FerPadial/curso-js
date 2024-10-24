const p_temp=document.getElementById("p_temp")
const p_nivel=document.getElementById("p_nivel")
const p_press=document.getElementById("p_press")
const btn_texto=document.getElementById("btn_texto")

const obterDados=()=>{
    // const endpoint="https://cbf16bae-76bb-4a28-a9f8-f9227ddfa204-00-3l882ep6j1n8f.worf.replit.dev/"
    const endpoint="http://127.0.0.1:1880/cfbcursos"
    fetch(endpoint,{method:"get"})

    // .then(res=>console.log(res))
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
        p_nivel.innerHTML=`Nível: ${dados.nivel}`
        p_press.innerHTML=`Pressão: ${dados.pressao}`
    })
}

//let intervalo=setInterval(obterDados,2000)

// btn_texto.addEventListener("click",(evt)=>{
//     obterDados()
// })

// AQUI PRECISA UTILIZAR O NODE-RED - EXECUTAR O PROMPT COMO ADMIN E RODAR NODE-RED ai acessar a aplicação NODE-RED pelo ip Porta => 127.0.0.1:1880 


let dados = {
    nome: "Bruno",
    cana:"CFBCursos",
    curso:"JavaScript"
}

let cabechalho={
    method: "POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    // const endpoint="https://cbf16bae-76bb-4a28-a9f8-f9227ddfa204-00-3l882ep6j1n8f.worf.replit.dev/"
    const endpoint="http://127.0.0.1:1880/gravar"
    fetch(endpoint,cabechalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btn_texto.addEventListener("click",(evt)=>{
    gravarDados()
})
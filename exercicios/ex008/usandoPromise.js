//Promise - resolve o problema do javascript assincrono
// executa um script linha a linha até terminar e ao final eu preciso executar algo com um retorno pq a execução ja passou e não tem como voltar então promise garante que mesmo que a execução tenha seguido ele garante que uma execução especifica será realizada

const numero=document.getElementById("numero")

let promise=new Promise((res_ok,res_nok)=>{
    let resultado=true
    let tempo=3000

    setTimeout(() => {
       if(resultado){
         res_ok("Deu tudo certo!")
       } else {
        res_nok("Deu tudo errado!")
       }
    }, tempo);
})

promise.then((ret)=>{
    numero.innerHTML=ret
    numero.classList.remove("erro")
    numero.classList.add("ok")
})
promise.catch((ret)=>{
    numero.innerHTML=ret
    numero.classList.add("erro")
    numero.classList.remove("ok")     
})

numero.innerHTML="Processando..."


// let resultado=false
// let tempo=3000

// setTimeout(()=>{
//     resultado=true
// },tempo)

// if(resultado){
//     numero.innerHTML="Deu tudo certo!"
//     numero.classList.remove("erro")
//     numero.classList.add("ok")
// } else {
//     numero.innerHTML="Deu tudo errado!"
//     numero.classList.add("erro")
//     numero.classList.remove("ok")   
// }

// numero.innerHTML="Processando..."
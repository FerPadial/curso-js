const p_array=document.querySelector("#array")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=[20,15,80,23,11,31,47] // some retorna qdo um ou alguns elementos correspondem a regra

p_array.innerHTML="["+elementos_array+"]"

//Every verifica equivalencia do array com uma regra especifica se uma
// dos elementos não estiver em conformidade resulta em array não conforme

btnPesquisar.addEventListener("click",(evt)=>{
    const ret = elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML="Array não conforme na posição <strong>" + i + "</strong>"
        }
        return e>=18  //essa é a regra o elemento maior do que 18
    })
    if (ret){
        resultado.innerHTML="OK!"
    }
    console.log(ret)
})
const p_array=document.querySelector("#array")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

//const elementos_array=[10,5,8,2,9,15,20] // aqui não tem todos os elementos em conformidade com a regra de ser mmaior do que 18
const elementos_array=[20,25,80,23,18,31,47] // aqui todos os elementos em conformidade com a regra de ser mmaior do que 18
//const elementos_array=["HTML","CSS","JavaScript","PHP","C#","Visual Basic","Clipper"]
p_array.innerHTML="["+elementos_array+"]"

//Every verifica equivalencia do array com uma regra especifica se uma
// dos elementos não estiver em conformidade resulta em array não conforme

btnPesquisar.addEventListener("click",(evt)=>{
    const ret = elementos_array.every((e,i)=>{
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
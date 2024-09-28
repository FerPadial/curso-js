const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5] // some retorna qdo um ou alguns elementos correspondem a regra
let ant=[]
let atu=[]
let dobro=[]

p_array.innerHTML="["+elementos_array+"]"

//Every verifica equivalencia do array com uma regra especifica se uma
// dos elementos não estiver em conformidade resulta em array não conforme

btnReduzir.addEventListener("click",(evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML=elementos_array.reduce((anterior,atual,pos)=>{
        ant.push(anterior)
        atu.push(atual)
        dobro.push(atual*2)
        return atual + anterior //0+1=1+2=3+3=6+4=1-+5=15 ou seja pega o anterior e soma com atual
    })
    resultado.innerHTML+="<br/>V.anteriro: "+ant+"<br/>V.Atual: "+atu+"<br/>Dobro: "+dobro
})
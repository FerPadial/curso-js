const caixa=document.querySelector("#caixa")

//coleção MAP é do tipo chave, valor

let mapa = new Map()

//adcionar chaves valores
mapa.set("curso","JavaScript")  
mapa.set(10,"CFB Cursos")  
mapa.set(1,100)  
mapa.set("canal",550)  

mapa.delete(1)

console.log(mapa)

//verificando se uma chave existe na coleção
let pes=5
let res=""
if(mapa.has(pes)){
    res="A chave existe na coleção e tem o valor: " + mapa.get(pes)
} else{
    res="A chave NÃO existe na coleção"
}

res+="<br/> O tamanho da coleção é " + mapa.size + " elementos"
caixa.innerHTML=res


mapa.forEach((el)=>{
    console.log(el)
})
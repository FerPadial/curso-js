const caixa=document.querySelector("#caixa")

let musicas=new Set(['musica1','musica boa','musica10'])  //SET não permite elementos duplicados

musicas.add("musica muito legal")
musicas.add('musica1')
musicas.add('musica1')
musicas.add('musica10')

console.log(musicas)

musicas.delete('musica1')
musicas.clear()

// musicas.forEach((el)=>{
//     caixa.innerHTML += el + "<br/>"
// })

for(let m of musicas) {
    caixa.innerHTML += m + "<br/>"
}


const curso="JavaScript"
const canal="CFB Cursos"
//const frase="Este é o curso de " + curso + " do canal " + canal

//usando Template String
const frase = `Este é o curso de<br/> ${curso} <br/>do canal<br/> ${canal}`

caixa.innerHTML=frase

const carros=['Polo','Golf','T-Cross',"HRV"]
let ul='<ul>'
carros.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul+=`</ul>`
caixa.innerHTML=ul
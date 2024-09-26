const dc1 = document.getElementById('c1') /* retorna apenas 1 elemento */
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')
const arrayel = [dc1,dc2,dc3,dc4,dc5,dc6]
console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)
dc1.innerHTML = "DCB Cursos"

/*
for(d of arrayel){
    d.innerHTML = "CFB Cursos"
}
console.log(arrayel)*/

arrayel.map((e)=>{
    e.innerHTML = "CFB Cursos"
    console.log(e)
})

const colecao= document.getElementsByTagName("div") /*não tem map*/
console.log(colecao)

const colecaoHTML= [...document.getElementsByTagName("div")] /*transformando em array com Spread"..."*/
console.log(colecaoHTML)
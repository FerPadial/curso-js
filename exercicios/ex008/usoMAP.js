let el=document.getElementsByTagName("div")
el=[...el]
console.log(el)

el.map((e,i)=>{console.log(e.innerHTML)})
el.map((e,i)=>{e.innerHTML="CURSO EFB"})

const elem=document.getElementsByTagName("div")
const val=Array.prototype.map.call(elem,({innerHTML})=>innerHTML)
console.log(val)


//converter INT
const converterInt=(e)=>parseInt(e)
let num=['1','2','3','4'].map(converterInt)
console.log(num)

const dobrar=(e)=>e*2
let num1=['1','2','3','4'].map(dobrar)
console.log(num1)
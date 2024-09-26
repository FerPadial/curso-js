
const soma=(v1,v2)=>{return v1+v2}
console.log(soma(10,5))

const soma3=(v1,v2)=>v1+v2
console.log(soma3(50,5))

const soma2=(...valores)=>{
    let res = 0
    for( let i of valores){res+=i}
    return res
}

console.log(soma2(10,15))
console.log(soma2(10,15,20,25,30))

const nome=n=>{return n}
console.log(nome("Bruno"))

const nome2=n=>n
console.log(nome2("João"))

const add=n=>n+10
console.log(add(100))
const f=function(v1,v2){return v1+v2}

console.log(f(10,5))


const g=function(...valores){
    let res=0
    for (let v of valores){res+=v}
    return res 
}

console.log(g(30,75))
console.log(g(30,75,50,30,10))


/*Utilizando construtor*/
const x=new Function("v1","v2","return v1+v2")   /* tem que ser F maiucula*/
console.log(x(1000,500))
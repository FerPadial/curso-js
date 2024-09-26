const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val) res+=v
        return res
    }
    return somar(valores)
}

console.log(soma(1,2,3,4,5))
console.log(soma(1,4,5))

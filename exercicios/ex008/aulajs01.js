function soma(...valores){  /* para um spread como parametro ai pode ter qtde de elementos variaveis*/

    return valores.length

}

console.log(soma(10,20,1,5))
console.log(soma(10,20))
console.log(soma(10,20,1,5,3,4,5,6,7,8,9))


function soma2(...valores){  /* para um spread como parametro ai pode ter qtde de elementos variaveis*/
    let tam = valores.length
    let res=0

    for(let i=0;i<tam;i++){
        res+=valores[i]
    }

    return res

}

console.log(soma2(10,4,3,6,7))

function soma2(...valores){  /* para um spread como parametro ai pode ter qtde de elementos variaveis*/
    let tam = valores.length
    let res=0

    for(let v of valores){res+=v}

    return res

}

console.log(soma2(10,10,10,10))
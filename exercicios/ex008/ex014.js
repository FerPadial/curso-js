let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
num.push(4)
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
/*console.log(num[0])*/

/* ver o for simplificado
for (var i = 0; i <= num.length; i++){
    console.log(num[i])
}*/

for(let pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(5))  /* retorna o index do elemento que tem o valor passado no parametro*/
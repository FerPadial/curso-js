//let nome=new String("Bruno Pinho Campos")
// let nome2=new String("Bruno Pinho Campo")
// let nome3=new String(nome.toUpperCase())
// let canal=new String("CFB Cursos")
// let outroNome = new String("Fernando")

// console.log(nome)
// console.log(typeof(nome))
// console.log(outroNome)

// console.log(nome.charAt(0))  //Retorna o caracter da posição especificada
// console.log(nome.charCodeAt(0))  //Retorna o codigo ASCII

// console.log(nome.concat(canal).concat("ABC").concat(outroNome))
// console.log(nome)

// console.log(nome.indexOf("no"))  // é o mesmo que procurar a letra n
// console.log(nome.length)


// console.log(nome.indexOf("o")) //encontra a posição da primeira ocorrencia do caracter na string
// console.log(nome.lastIndexOf("o"))  //encontra a posição da ultima ocorrencia do caracter na string

// console.log(nome==nome2)  //retorna false isso porque está utilizando objeto string e não variaveis comuns
// console.log(nome===nome2)  //retorna false isso porque está utilizando objeto string e não variaveis comuns

// // a forma correta de comparar contudo de objeto string
// console.log(nome.localeCompare(nome2))  //retorna 0 isso significa que o conteudo dos dois objetos strings é igual, qdo o valor de retorno é 1 siginifica que a string comparada tem mais caracteres que a string original, qdo -1 significa que a string original é menor que a segunda

// //Substituindo conteudo
// console.log(nome.replace("Br","Pl"))
// console.log(nome.replace("o","u"))  //substitui somente a primeira ocorrencia do caracter na string

// console.log(nome.search("o")) //retorna a posição da primeira ocorrencia na string

// console.log(nome.slice(6,11))  // pega da String original da posição inicio até a posição final (posicao final não é a qtde de caracteres mas sim a posição mesmo)

// sobrenome=nome.slice(6,11)
// let arr_nome=nome.split(" ")
// console.log(arr_nome)  // retorna um array onde cada elemento foi separado pelo caracter especificado em split

// let parte=nome.substring(6,11)
// console.log(parte)  // igual slice, vc indica a posição inicial ea posição final (a posição final NÃO é qtde de caracteres)

// let parte2=nome.substr(6,5)
// console.log(parte2)  // substring normal da posição inicial x caracteres (mas está sendo descontinuado)

// console.log(nome.toUpperCase())
// console.log(nome3)
// console.log(nome3.toLowerCase())

// console.log(nome.valueOf())

// let num=10
// console.log(typeof(num))
// console.log(typeof(num.toString()))


//NOVOS METODOS IMPLEMENTADOS MAIS RECENTEMENTE NO JAVASCRIPT
let nome=new String("Bruno Pinho Campos")

console.log(nome.startsWith("Pinho"))  // verificar se a string começa um o valor passado no parametro
console.log(nome.startsWith("Bruno"))  // verificar se a string começa um o valor passado no parametro

console.log(nome.endsWith("Pinho"))  // verificar se a string termina um o valor passado no parametro
console.log(nome.endsWith("Campos"))  // verificar se a string termina um o valor passado no parametro

console.log(nome.includes("nho"))  // verificar se a string contem o valor passado no parametro

console.log(nome.repeat(4))  // verificar se a string começa um o valor passado no parametro

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))

console.log(String.fromCodePoint(nome.charCodeAt(0)))
console.log(String.fromCodePoint(nome.charCodeAt(1)))
console.log(String.fromCodePoint(nome.charCodeAt(2)))
console.log(String.fromCodePoint(nome.charCodeAt(3)))
console.log(String.fromCodePoint(nome.charCodeAt(4)))



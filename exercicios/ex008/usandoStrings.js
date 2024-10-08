let nome=new String("Bruno Pinho Campos")
let nome2=new String("Bruno Pinho Campo")
let canal=new String("CFB Cursos")
let outroNome = new String("Fernando")

console.log(nome)
console.log(typeof(nome))
console.log(outroNome)

console.log(nome.charAt(0))  //Retorna o caracter da posição especificada
console.log(nome.charCodeAt(0))  //Retorna o codigo ASCII

console.log(nome.concat(canal).concat("ABC").concat(outroNome))
console.log(nome)

console.log(nome.indexOf("no"))  // é o mesmo que procurar a letra n
console.log(nome.length)


console.log(nome.indexOf("o")) //encontra a posição da primeira ocorrencia do caracter na string
console.log(nome.lastIndexOf("o"))  //encontra a posição da ultima ocorrencia do caracter na string

console.log(nome==nome2)  //retorna false isso porque está utilizando objeto string e não variaveis comuns
console.log(nome===nome2)  //retorna false isso porque está utilizando objeto string e não variaveis comuns

// a forma correta de comparar contudo de objeto string
console.log(nome.localeCompare(nome2))  //retorna 0 isso significa que o conteudo dos dois objetos strings é igual, qdo o valor de retorno é 1 siginifica que a string comparada tem mais caracteres que a string original, qdo -1 significa que a string original é menor que a segunda

//Substituindo conteudo
console.log(nome.replace("Br","Pl"))
console.log(nome.replace("o","u"))  //substitui somente a primeira ocorrencia do caracter na string

console.log(nome.search("o")) //retorna a posição da primeira ocorrencia na string

console.log(nome.slice(6,11))  // pega da String original da posição inicio até a posição final (posicao final não é a qtde de caracteres mas sim a posição mesmo)

sobrenome=nome.slice(6,11)
let arr_nome=nome.split(" ")
console.log(arr_nome)  // retorna um array onde cada elemento foi separado pelo caracter especificado em split


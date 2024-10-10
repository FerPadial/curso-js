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
// let nome=new String("Bruno Pinho Campos")

// console.log(nome.startsWith("Pinho"))  // verificar se a string começa um o valor passado no parametro
// console.log(nome.startsWith("Bruno"))  // verificar se a string começa um o valor passado no parametro

// console.log(nome.endsWith("Pinho"))  // verificar se a string termina um o valor passado no parametro
// console.log(nome.endsWith("Campos"))  // verificar se a string termina um o valor passado no parametro

// console.log(nome.includes("nho"))  // verificar se a string contem o valor passado no parametro

// console.log(nome.repeat(4))  // verificar se a string começa um o valor passado no parametro

// console.log(nome.charCodeAt(0))
// console.log(nome.charCodeAt(1))
// console.log(nome.charCodeAt(2))
// console.log(nome.charCodeAt(3))
// console.log(nome.charCodeAt(4))

// console.log(String.fromCodePoint(nome.charCodeAt(0)))
// console.log(String.fromCodePoint(nome.charCodeAt(1)))
// console.log(String.fromCodePoint(nome.charCodeAt(2)))
// console.log(String.fromCodePoint(nome.charCodeAt(3)))
// console.log(String.fromCodePoint(nome.charCodeAt(4)))

//Expressoes regulares  REGEX - são caracteres especiais que se usados podem mudar o comportamento de algumas funções
let nome=new String("Brunooo Pinho Camposssssss 1978")
let email = "bruno@bruno.com.br"
let numeros = "1, 10, 100, 1000"

console.log(nome.search("Pinho")) // pesquisa a posição dentro da String - aqui retorna a posição 6
console.log(nome.search("pinho")) // pesquisa a posição dentro da String - aqui retorna a posição -1 pq não encontrou pq é case sensitive
console.log(nome.search(/pinho/i)) // pesquisa a posição dentro da String - aqui retorna a posição 6 pq apesar de ser case sensitive com a notação regex /xxx/i ele ignora o case sensitive

console.log(nome.match("o")) // a função match retorna a posição apenas do primeiro que ele encontrou
console.log(nome.match(/o/g)) // aqui com o REGEX e parameto g de global ele encontra todos mas como está sem o parametro i ele não ingnora o case sensitive
console.log(nome.match(/O/ig)) // aqui com o REGEX e parameto g de global ele encontra todos e neste caso usando o parametro i ele ingnora o case sensitive e encontra todos

console.log(nome.replace(/pinho/i,"Teste"))
console.log(nome.replace(/O/ig,"u"))

//criando padroes dentro de regex
console.log(nome.match(/[OH]/ig)) //usando colchetes ele vai buscar cada caracter dentro do colchetes aplicando os parametros passados nesse caso ignore case sensitive e o global

console.log(nome.match(/[A-M]/ig)) //com colchetes e traço busca o range dentre do intervalo de novo olhando os parametros i e g

console.log(nome.match(/[A-M|0-9]/ig)) //com colchetes e traço busca o range dentre do intervalo de novo olhando os parametros i e g o pipe | significa "e"

//usando meta-caracteres
console.log(nome.match(/\d/ig)) //  \d retorna somente digitos numericos
console.log(nome.match(/\s/ig))  // espaços
console.log(nome.match(/\bp/ig))  // letra ou palavra

//Quantificadores
console.log(nome.match(/O+|s+/ig)) //qdo tem letras repetidas na mesma palavra coloca o sinal de "+" pra ele entender isso
console.log(nome.match(/no*/ig))

console.log(numeros)
console.log(numeros.match(/10/ig))
console.log("usando sinal + => " + numeros.match(/10+/ig))
console.log("usando sinal * => " + numeros.match(/10*/ig))
console.log("usando sinal ? => " + numeros.match(/10?/ig))
// é uma expressão que permite extrair dados de um objeto ou de array e associar eese dados à variaveis distintas
let a,b,c,d,e,f,g,h

[a,b,c,d,e,f,g,h]=[10,20,30,40,"verde","amarelo","azul","branco"]


console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)

//Com objetos
let i,j,k,l
({i,j,k,l}={i:"vermelho",j:"cinza",k:"preto",l:"oliva"})
console.log(i)
console.log(j)
console.log(k)
console.log(l)

let numeros=[50,60,70,80]
let [v,x,y,z]=numeros
console.log(v)
console.log(x)
console.log(y)
console.log(z)

let [m,n=0,o=0,p=0]=[10]
console.log(m)
console.log(n)
console.log(o)
console.log(p)

let q=10;
let r=20;
[q,r]=[r,q]
console.log(q)
console.log(r)

let numeracao=()=>{
    return [100,200,300,400]
}
[m,n,o,p]=numeracao()
console.log(numeracao)
console.log(m)
console.log(n)
console.log(o)
console.log(p)

let nums=[10,20,30,40,50,60,80,90]
let [s,t,u,...f1]=nums
console.log(s)
console.log(t)
console.log(u)
console.log(f1)

let obj={nome:"Bruno",canal:"CFB Cursos"}
let {nome,canal}=obj  //os nomes das variaveis tem que ter os mesmos nomes do que consta no obj
console.log(nome)
console.log(canal)

const coloracao=()=>{
    return ["vermelho","cinza","preto","oliva"]
}
let [c1,c2,,c3]=coloracao()  //assim ele pula o preto
console.log(c1)
console.log(c2)
console.log(c3)

const texto="Curso de JavaScript"
console.log(texto.split(" ")) //vai retornar um array ["Custo","de","JavaScript"]
let [...te]=texto.split(" ")
console.log(te)
let [p1,p2,p3]=texto.split(" ")
console.log(p1)
console.log(p2)
console.log(p3)

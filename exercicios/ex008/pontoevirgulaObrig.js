//qdo uso de ; é obrigatorio ele indica termino de instrução, por exemplo no caso do for sem bloco de codigo
let i=0;
for (i=0;i<=10;i++){
    console.log(i);
}

for(i=0;i<=10;i++); console.log(`Usandro For sem bloco de codigo, resultado do i: ${i}`);

let a=null; a=100;
console.log(a)

//se a proxima linha for começar com colchetes ou parenteses a linha atual tem que terminar com ;
let canal="CFB Cursos";  // esse ; é obriatorio senão da erro no forEach
['a','b','c','d','e','f'].forEach(l=>console.log(l));

let n1=[1,2]
let n2=[3,4];
[n1,n2].map(v=>console.log(v))


let n=null;
(n=1000)
console.log(n)

//desestruturação
let nums=[10,20,30];
[n1,n2,n3]=nums
console.log(`n1: ${n1} - n2: ${n2} - n3: ${n3}`)

//no caso de objeto não tem problema
let numbers={ns1:50,ns2:500,ns3:5000}
let {ns1,ns2,ns3}=numbers
console.log(`n1: ${ns1} - n2: ${ns2} - n3: ${ns3}`)

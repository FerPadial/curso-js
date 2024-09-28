const caixa=document.querySelector("#caixa")

let cores=['azul','verde','vermelho',['claro','escuro','médio']]
let cursos=["HTML","CSS","JavaScript",cores]

cursos[0]="C++"
cursos[1]= 10
cursos.push("PHP")  // adiciona elemento no final do array
cursos.pop() // remove o ultimo elemento do Array
cursos.unshift("Python") // adiciona elemento no inicio do array
cursos.shift() // remove elemento no inicio do array
console.log(cursos[0]) // olhando um elemento especifico

console.log(cursos[3][3][2])  // traz a cor vermelha


// percorrendo elementos do Array, pode ser com for com while ou com map
cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})

let valores=[1,2,3,4,5]
const op=[
    (val)=>{ //primeiro elemento do array é uma função de soma
        let res=0
        for (v of val){
            res+=v
        }
        return res
    },
    (val)=>{  //segundo elemento do array é uma função de multiplicação
        let res=1
        for (v of val){
            res*=v
        }
        return res
    },
    (val)=>{  //terceiro elemento do array é uma função de apresentação no console
        for (v of val){
            console.log(v)
        }
    }
]

console.log(op[0](valores)) //chama função do primeiro elemento passando como paramro pra o array valores
console.log(op[1](valores)) //chama função do segundo elemento passando como paramro pra o array valores
op[2](valores) // como na função já tem o console.log não precisa colocar na chamada só para o parametro da função
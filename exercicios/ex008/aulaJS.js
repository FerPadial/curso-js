
const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach (Element => {
    console.log(Element)
})


console.log(objs2[0].innerText="xxxxxxxxx")


let num = [10,20,30,40,50,60]

for (n in num){console.log(num[n])}

/* isso é igual a:*/
for (let i=0; i<num.length;i++){
    console.log(num[i])
}

/*mesmo que isso:*/
for (n of num){console.log(n)}

const obj = document.getElementsByTagName("div")
for(o of obj){console.log(o)}

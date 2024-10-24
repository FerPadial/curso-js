const texto = document.querySelector("#texto");

const endpoint = "../arqs/texto.txt"

fetch(endpoint)
.then(res=>res.text())
.then(res=>{
    res=JSON.parse(res)
    console.log(res)
    console.log(res.canal)
    console.log(res.curso)
})
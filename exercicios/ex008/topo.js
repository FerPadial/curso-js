const head=document.head
const body=document.body

const estilo="<link rel='stylesheet' href='topo.css'>"
head.innerHTML+=estilo

const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("class","topo")

body.prepend(topo)  //append e appendchild anexa no final e prepend anexa no começo no topo
const logo=
    "<div id='logo' class='logo'>"+
        "<img src='../imagens/olho.JPG' title='CFB Cursos'/>"+
    "</div>"

topo.innerHTML+=logo

const login=
    "<div id='login' class='login'>"+
        "<p id='matricula'>Matricula:<span></p>"+
        "<p id='nome'>Nome:<span></p>"+
    "</div>"

    topo.innerHTML+=login
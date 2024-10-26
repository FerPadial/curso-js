
const body=document.body

const estilotopo=
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: rgba(211, 211, 244, 0.774);"
const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("style",estilotopo)
body.prepend(topo)  //append e appendchild anexa no final e prepend anexa no começo no topo

const estilo_img_logo="width: 150px;"

const logo=
    "<div id='logo' class='logo'>"+
        "<img src='../imagens/olho.JPG' title='CFB Cursos' style='"+estilo_img_logo+"'/>"+
    "</div>"

topo.innerHTML+=logo

const login=
    "<div id='login' class='login'>"+
        "<p id='matricula'>Matricula:<span></p>"+
        "<p id='nome'>Nome:<span></p>"+
    "</div>"

    topo.innerHTML+=login
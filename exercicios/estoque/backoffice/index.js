const btn_menuPrincipal = document.querySelector("#btn_menuPrincipal");
const menuPrincial=document.querySelector("#menuPrincial");
const todosmenusprincipais=[...document.querySelectorAll(".btn_menuItem")];

//ler arquivo de texto
const endpoint_config=`../config.txt`;
fetch(endpoint_config)
.then(res=>res.json())
.then(res=>{
    //guardando uma sessão com o valor da variavel servidor_nodered que está no arquivo txt
    sessionStorage.setItem("servidor_nodered",res.servidor_nodered);
    sessionStorage.setItem("versao",res.versao);
})


btn_menuPrincipal.addEventListener("click",(evt)=>{
    menuPrincial.classList.toggle("ocultar");
})

todosmenusprincipais.forEach(e=>{
    e.addEventListener("click",(evt)=>{
        menuPrincial.classList.toggle("ocultar");
    })
})


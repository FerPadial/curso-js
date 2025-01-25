const dados=document.querySelector("#dadosg");
const fundopopup=document.querySelector("#fundopopup");
const btn_gravar=document.querySelector("#btn_gravar");
const btn_cancelar=document.querySelector("#btn_cancelar");
const f_id=document.querySelector("#f_id");
const f_nome=document.querySelector("#f_nome");
const f_celular=document.querySelector("#f_celular");
const f_email=document.querySelector("#f_email");
const f_dtnasc=document.querySelector("#f_dtnasc");


// Exemplo consumo de API em PHP
fetch("gestao.php")
.then(res=>res.json())
.then(res=>{
    
})



btn_gravar.addEventListener("click",(evt)=>{
    fundopopup.classList.add("ocultar")

    const endpoint=`http://127.0.0.1:1880/atualizarcontato`;

    const gravar={
        "id":f_id.value,
        "nome":f_nome.value,
        "celular":f_celular.value,
        "email":f_email.value,
        "dtnasc":f_dtnasc.value
    }

    const cabecalho={
        method:'POST',
        body:JSON.stringify(gravar)

    }

    fetch(endpoint,cabecalho)
    .then(res=>{
        console.log(res.status);
        if(res.status == 200){
            console.log("entrou no 200");
            preencherdgv();
        }else {
            console.log("entrou no erro");
            alert("Não foi possível atualizar os dados!");
        }
    });
});

btn_cancelar.addEventListener("click",(evt)=>{
    fundopopup.classList.add("ocultar")
});

const preencherdgv=()=>{
    dados.innerHTML=""

    let endpoint=`http://127.0.0.1:1880/pesquisartodoscontatos`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.innerHTML="";
        res.forEach((el)=>{
            const linha=document.createElement("div");
            linha.setAttribute("class","linhadadosg");
 
            const cg1=document.createElement("div");
            cg1.setAttribute("class","coluna cg1 c_dado");
            cg1.innerHTML=el.n_contato_contato;
            linha.appendChild(cg1);

            const cg2=document.createElement("div");
            cg2.setAttribute("class","coluna cg2");
            cg2.innerHTML=el.s_nome_contato;
            linha.appendChild(cg2);
 
            const cg3=document.createElement("div");
            cg3.setAttribute("class","coluna cg3");
            cg3.innerHTML=el.s_celular_contato;
            linha.appendChild(cg3);
 
            const cg4=document.createElement("div");
            cg4.setAttribute("class","coluna cg4");
            cg4.innerHTML=el.s_email_contato;
            linha.appendChild(cg4);

            const cg5=document.createElement("div");
            cg5.setAttribute("class","coluna cg5");
            //const formatter = Intl.DateTimeFormat('pt-BR','{short,}');
            cg5.innerHTML=el.Dt_Nasc;   //Não consegui formatar a data no JS então ajustei na query no NODE-RED pra retornar ja formatado
            linha.appendChild(cg5);

            const cg6=document.createElement("div");
            cg6.setAttribute("class","coluna cg6 c_op");
            const imgdelete=document.createElement("img");
            imgdelete.setAttribute("src","../imagens/lixeira.svg");
            imgdelete.setAttribute("class","iconeop");
            imgdelete.addEventListener("click",(evt)=>{
                //console.log(evt.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);  // Pra pegar o dados da linha na coluna ID
                //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML);  // Pra pegar o dados da linha na coluna ID
                removerContato(evt.target.parentNode.parentNode.firstChild.innerHTML);

            })
            const imgeditar=document.createElement("img");
            imgeditar.setAttribute("class","iconeop");
            imgeditar.setAttribute("src","../imagens/editar.svg");
            imgeditar.addEventListener("click",(evt)=>{
                fundopopup.classList.remove("ocultar")
                const dados = [...evt.target.parentNode.parentNode.childNodes];
                f_id.value=dados[0].innerHTML;
                f_nome.value=dados[1].innerHTML;
                f_celular.value=dados[2].innerHTML;
                f_email.value=dados[3].innerHTML;
                f_dtnasc.value=dados[4].innerHTML;
            })
            cg6.appendChild(imgdelete);
            cg6.appendChild(imgeditar);
            linha.appendChild(cg6);

            dados.appendChild(linha);
        })
    });

};

preencherdgv();

const removerContato=(id)=>{
    const endpoint=`http://127.0.0.1:1880/deletarcontatos/${id}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            //Rotina para remover 1a opcao pode recarregar toda a grid a partir de banco de dados ou somente elimnar a Div da linha onde fio clicado delete
            preencherdgv();

        }
    })
}
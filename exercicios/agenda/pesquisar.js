const btn_pesq=document.querySelector("#btn_pesq");
const f_txtpesq=document.querySelector("#f_txtpesq");
const dados=document.querySelector("#dados");
const opt_radio=document.querySelectorAll('input[name="f_pesq"]');

//se houve mudança em algum radio button, limpa a caixa de texto e seta o foco
opt_radio.forEach((el)=>{
    el.addEventListener("change", function(){
        f_txtpesq.value="";
        f_txtpesq.focus();

        //LIMPAR O GRID CASO TENHA CLICADO EM OUTRO RADIO BUTTON
        const removelinhadados = document.querySelectorAll(".linhadados");
        removelinhadados.forEach((elr)=>{
            elr.remove();    
        })
    })
})

btn_pesq.addEventListener("click",(evt)=>{
    if(f_txtpesq.value == ""){
        alert("Informe o texto da pesquisa!")
        f_txtpesq.focus();
        return;
    }

    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value;

    let valorpesq = f_txtpesq.value;
    if(f_pesq == "nasc"){
        valorpesq = valorpesq.replace('/[^0-9]/g','');
        //const dtnasc = "'" + valorpesq.replace('/[^0-9]/g','') + "'";
    }

    let pesquisar="";

    if(f_pesq == "id"){
        pesquisar={
            "id":valorpesq,
            "nome":"",
            "celular":"",
            "email":"",
            "nasc":""
        }
    }else if(f_pesq == "nome"){
        pesquisar={
            "id":"",
            "nome":valorpesq,
            "celular":"",
            "email":"",
            "nasc":""
        }
    }else if(f_pesq == "celular"){
        pesquisar={
            "id":"",
            "nome":"",
            "celular":valorpesq,
            "email":"",
            "nasc":""
        }
    }else if(f_pesq == "email"){
        pesquisar={
            "id":"",
            "nome":"",
            "celular":"",
            "email":valorpesq,
            "nasc":""
        }
    }else if(f_pesq == "nasc"){
        pesquisar={
            "id":"",
            "nome":"",
            "celular":"",
            "email":"",
            "nasc":valorpesq
        }
    }
    
    const cabecalho={
        method:'POST',
        body:JSON.stringify(pesquisar)

    }

    // let endpoint=`http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${pesquisar}`;
    // fetch(endpoint)
    let endpoint=`http://127.0.0.1:1880/pesqcontatos`;
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(res=>{
        dados.innerHTML="";
        res.forEach((el)=>{
            const linha=document.createElement("div");
            linha.setAttribute("class","linhadados");
 
            const c1=document.createElement("div");
            c1.setAttribute("class","coluna c1");
            c1.innerHTML=el.n_contato_contato;
            linha.appendChild(c1);

            const c2=document.createElement("div");
            c2.setAttribute("class","coluna c2");
            c2.innerHTML=el.s_nome_contato;
            linha.appendChild(c2);
 
            const c3=document.createElement("div");
            c3.setAttribute("class","coluna c3");
            c3.innerHTML=el.s_celular_contato;
            linha.appendChild(c3);
 
            const c4=document.createElement("div");
            c4.setAttribute("class","coluna c4");
            c4.innerHTML=el.s_email_contato;
            linha.appendChild(c4);

            const c5=document.createElement("div");
            c5.setAttribute("class","coluna c5");
            //const formatter = Intl.DateTimeFormat('pt-BR','{short,}');
            c5.innerHTML=el.Dt_Nasc;   //Não consegui formatar a data no JS então ajustei na query no NODE-RED pra retornar ja formatado
            linha.appendChild(c5);

            dados.appendChild(linha);
        })
    });

});


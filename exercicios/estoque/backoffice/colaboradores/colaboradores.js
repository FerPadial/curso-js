const dadosGrid=document.querySelector("#dadosGrid");
const btn_add=document.querySelector("#btn_add");
const novoColaborador=document.querySelector("#novoColaborador");
const btn_fecharPopup=document.querySelector("#btn_fecharPopup");
const btn_gravarPopup=document.querySelector("#btn_gravarPopup");
const btn_cancelarPopup=document.querySelector("#btn_cancelarPopup");
const telefones=document.querySelector("#telefones");
const f_telefone=document.querySelector("#f_telefone");
const f_nome=document.querySelector("#f_nome");
const f_tipoColab=document.querySelector("#f_tipoColab");
const f_status=document.querySelector("#f_status");
const f_foto=document.querySelector("#f_foto");
const img_foto=document.querySelector("#img_foto");
const f_filtragem=document.querySelector("#f_filtragem");
const pesquisa=document.querySelector("#pesquisa");
const btn_fecharPopupPesq=document.querySelector("#btn_fecharPopupPesq");
const btn_pesq=document.querySelector("#btn_pesq");
const f_pesqId=document.querySelector("#f_pesqId");
const f_pesqNome=document.querySelector("#f_pesqNome");
const f_pesq=document.querySelector("#f_pesq");
const btn_pesquisar=document.querySelector("#btn_pesquisar");
const btn_listartudo=document.querySelector("#btn_listartudo");

//n=Novo Colaborador | e=Editar Colaborador
let modojanela="n"
const serv=sessionStorage.getItem("servidor_nodered");

f_filtragem.addEventListener("keyup",(evt)=>{   
    //keyup pq conforme eu for digitando no campo de filtragem a lista já vai sendo atualizada - dessa forma não usa backend, não precisa consultar na base
    const linhas = [...document.querySelectorAll(".linhaGrid")];
    let input,texto,filtragem;
    input=evt.target;
    filtragem=input.value.toUpperCase();
    for(let i=0;i<linhas.length;i++){
        texto=linhas[i].children[1].innerHTML;
        if(texto.toUpperCase().indexOf(filtragem)>-1){
            linhas[i].classList.remove("ocultarLinhaGrid");
        }else{
            linhas[i].classList.add("ocultarLinhaGrid");
        }
    }
})

btn_fecharPopupPesq.addEventListener("click",(evt)=>{
    pesquisa.classList.add("ocultarPopup");
})
btn_pesq.addEventListener("click",(evt)=>{
    pesquisa.classList.remove("ocultarPopup");
})
f_pesqId.addEventListener("click",(evt)=>{
    f_pesq.value="";
    f_pesq.focus();
});
f_pesqNome.addEventListener("click",(evt)=>{
    f_pesq.value="";
    f_pesq.focus();
});
btn_pesquisar.addEventListener("click",(evt)=>{  //Essa pesquisa será via backend
    if(f_pesq.value!=""){
        let tipo=null;
        tipo = f_pesqId.checked?"id":"nome";
        const endpointpesq=`${serv}/pesquisacolab/${tipo}/${f_pesq.value}`
        fetch(endpointpesq)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
        pesquisa.classList.add("ocultarPopup");
    }else{
        alert("Preencha o campo de pesquisa.");
        f_pesq.focus();
    }
});

const criarCxTelefone=(fone,idtel,tipo)=>{
    const divTel=document.createElement("div");
    divTel.setAttribute("class","tel");

    const numTel=document.createElement("div");
    if(tipo=="n"){
        numTel.setAttribute("class","numTel novoTel");
    }else{
        numTel.setAttribute("class","numTel editarTel");
    }
    numTel.innerHTML=fone;
    divTel.appendChild(numTel);

    const delTel=document.createElement("img");
    delTel.setAttribute("src","../../imgs/delete.svg");
    delTel.setAttribute("class","delTel");
    delTel.setAttribute("data-idtel",idtel);
    delTel.addEventListener("click",(ev)=>{
        //console.log(evt.target.parentNode);
        if(idtel!="-1"){   //-1 igual a telefone novo então só exclui da base se o telefone já existir
            const objTel=ev.target;
            const idtel=objTel.dataset.idtel;
            
            if(confirm(`Confirma exclusão do telefone: ${fone}?`)){
                const endpoint_deltel=`${serv}/deltelefone/${idtel}`;
                fetch(endpoint_deltel)
                .then(res=>{
                    if(res.status==200){
                        ev.target.parentNode.remove(); //elimino o pai da div da lixeira parentNode
                    }else{
                        alert("Não foi possível remover o telefone!")
                    }
                })
            }
        }else{  //-1 igual a telefone novo então só remove da tela pq ainda não existe na base
            ev.target.parentNode.remove(); //elimino o pai da div da lixeira parentNode
        }
    })
    divTel.appendChild(delTel);

    telefones.appendChild(divTel);
}

const carga=()=>{
    const endpoint_todoscolaboradores=`${serv}/todosusuarios`;
    fetch(endpoint_todoscolaboradores)
    .then(res=>res.json())
    .then(res=>{
        // console.log(res);
        dadosGrid.innerHTML="";
        res.forEach(e=>{
            const divlinha=document.createElement("div");
            divlinha.setAttribute("class","linhaGrid");

            const divc1=document.createElement("div");
            divc1.setAttribute("class","colunaLinhaGrid c1");
            divc1.innerHTML = e.n_usuario_usuario;
            divlinha.appendChild(divc1);

            const divc2=document.createElement("div");
            divc2.setAttribute("class","colunaLinhaGrid c2");
            divc2.innerHTML = e.s_nome_usuario;
            divlinha.appendChild(divc2);

            const divc3=document.createElement("div");
            divc3.setAttribute("class","colunaLinhaGrid c3");
            divc3.innerHTML = e.n_tipousuario_tipousuario;
            divlinha.appendChild(divc3);

            const divc4=document.createElement("div");
            divc4.setAttribute("class","colunaLinhaGrid c4");
            divc4.innerHTML = e.c_status_usuario;
            divlinha.appendChild(divc4);

            const divc5=document.createElement("div");
            divc5.setAttribute("class","colunaLinhaGrid c5");
            divlinha.appendChild(divc5);

            const img_status=document.createElement("img");
            img_status.setAttribute("data-idcolab",e.n_usuario_usuario);
            img_status.setAttribute("class","icone_op");
            if(e.c_status_usuario=="A"){
                img_status.setAttribute("src","../../imgs/on.svg");
            }else{
                img_status.setAttribute("src","../../imgs/off.svg");
            }
            let status_colab=e.c_status_usuario;
            img_status.addEventListener("click",(evt)=>{
                const idcolab=evt.target.dataset.idcolab;  
                status_colab=status_colab=="A"?"I":"A";
                const endpoint_statuscolab=`${serv}/statuscolab/${idcolab}/${status_colab}`;
                fetch(endpoint_statuscolab)
                .then(req=>{
                    if(req.status==200){
                        divc4.innerHTML = status_colab;
                        if(status_colab=="A"){
                            img_status.setAttribute("src","../../imgs/on.svg");
                        }else{
                            img_status.setAttribute("src","../../imgs/off.svg");
                        }
                    }else{
                        alert("Não foi possível atualizar o status do Colaborador!");
                    }
                });
            })
            divc5.appendChild(img_status);

            const img_editar=document.createElement("img");
            img_editar.setAttribute("src","../../imgs/editar.svg")
            img_editar.setAttribute("class","icone_op")
            img_editar.addEventListener("click",(evt)=>{
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;  //Buscando ID da linha do grid onde clicou no lapis
                modojanela="e";
                document.getElementById("tituloPopup").innerHTML="Editar Colaborador";

                let  endpoint_dadoscolab=`${serv}/dadoscolab/${id}`;
                fetch(endpoint_dadoscolab)
                .then(res=>res.json())
                .then(res=>{
                    btn_gravarPopup.setAttribute("data-idcolab",id);   //guarda o valor do ID em um dataset do botão gravar pra ser recuperado na ação de update (editarcolab)
                    f_nome.value=res[0].s_nome_usuario;
                    f_tipoColab.value=res[0].n_tipousuario_tipousuario;
                    f_status.value=res[0].c_status_usuario;
                    //img_foto.setAttribute("src",res.s_foto_usuario);
                    img_foto.src=res[0].s_foto_usuario;
                });

                endpoint_dadoscolab=`${serv}/telefonesColab/${id}`;
                fetch(endpoint_dadoscolab)
                .then(res=>res.json())
                .then(res=>{
                    telefones.innerHTML="";
                    res.forEach(t=>{
                        criarCxTelefone(t.s_numero_telefone,t.n_telefone_telefone,"e");
                    })
                });
                novoColaborador.classList.remove("ocultarPopup");
            });
            divc5.appendChild(img_editar);

            const img_remover=document.createElement("img");
            img_remover.setAttribute("src","../../imgs/delete.svg")
            img_remover.setAttribute("class","icone_op")
            divc5.appendChild(img_remover);

            dadosGrid.appendChild(divlinha);

        })
    })
};

carga();

const endpoint_tiposcolab=`${serv}/tiposcolab`;
fetch(endpoint_tiposcolab)
.then(res=>res.json())
.then(res=>{
    f_tipoColab.innerHTML="";
    res.forEach(e=>{
        const opt=document.createElement("option");
        opt.setAttribute("value",e.n_tipousuario_tipousuario);
        opt.innerHTML=e.s_desc_tipousuario;
        f_tipoColab.appendChild(opt);
    });
});

btn_add.addEventListener("click",(evt)=>{
    document.getElementById("tituloPopup").innerHTML="Novo Colaborador";
    novoColaborador.classList.remove("ocultarPopup");
    modojanela="n"
    limparColab();
});

btn_fecharPopup.addEventListener("click",(evt)=>{
    novoColaborador.classList.add("ocultarPopup");
})

btn_fecharPopupPesq.addEventListener("click",(evt)=>{
    pesquisa.classList.add("ocultarPopup");
})

btn_pesq.addEventListener("click",(evt)=>{
    pesquisa.classList.remove("ocultarPopup");
})

btn_cancelarPopup.addEventListener("click",(evt)=>{
    novoColaborador.classList.add("ocultarPopup");
})

btn_gravarPopup.addEventListener("click",(evt)=>{
    if(f_telefone.value!=""){
        alert("Existe um telefone informado mas não registrado! Verifique.")

    }else{

        const tels=[...document.querySelectorAll(".novoTel")];  //só vai inserir na base os novos telefones
        let numTels=[];
        tels.forEach(t=>{
            numTels.push(t.innerHTML);
        })

        const dados={
            n_usuario_usuario:evt.target.dataset.idcolab,
            s_nome_usuario:f_nome.value,
            n_tipousuario_tipousuario:f_tipoColab.value,
            c_status_usuario:f_status.value,
            numTelefones:numTels,
            s_foto_usuario:img_foto.getAttribute("src")
        }
        
        const cab={
            method:'post',
            body:JSON.stringify(dados)
        }

        let endpointnovoeditarcolab=null;
        if(modojanela=="n"){
            endpointnovoeditarcolab=`${serv}/novocolab`;
        }else{
            endpointnovoeditarcolab=`${serv}/editarcolab`;
        }

        fetch(endpointnovoeditarcolab,cab)
        .then(res=>{
            if(res.status == 200)    {
                if(modojanela=="n"){
                    alert("Novo Colaborador gravado gravado com sucesso!");
                    limparColab();
                }else{
                    alert("Dados do Colaborador atualizados com sucesso!");
                    modojanela=="n" ? limparColab(): modojanela="e";
                }
                f_nome.focus();
                carga();
            }else{
                alert("Erro ao gravar novo Colaborador")
            }
        });
    }
    //novoColaborador.classList.add("ocultarPopup");
})

f_telefone.addEventListener("keyup",(evt)=>{
    if(evt.key=="Enter"){
        if(evt.target.value.length >= 8 && evt.target.value.length <=14){
            //console.log(evt.target.value)
            criarCxTelefone(evt.target.value,"-1","n")
            evt.target.value="";
        } else {
            alert("Número de Telefone Inválido!")
        }
    }
})

const converte_imagem_b64=(localDestino,arquivoimg)=>{
    const obj=arquivoimg;
    const reader=new FileReader();   // só funciona se estiver rodando dentro de um servidor (tem que estar publicado)
    reader.addEventListener("load",(evt)=>{
        localDestino.src=reader.result;
    });
    if(obj){
        reader.readAsDataURL(obj);
    }
}

f_foto.addEventListener("change",(evt)=>{
    converte_imagem_b64(img_foto,evt.target.files[0]);
})

const limparColab=()=>{
    f_nome.value="";
    f_status.value="";
    f_tipoColab.value="";
    f_foto.value="";
    img_foto.setAttribute("src","#");
    f_telefone.value="";
    telefones.innerHTML="";
}

import {Cxmsg} from "../../utils/cxmsg.js";

const dadosGrid=document.querySelector("#dadosGrid");
const btn_add=document.querySelector("#btn_add");
const novoFornecedor=document.querySelector("#novoFornecedor");
const btn_fecharPopup=document.querySelector("#btn_fecharPopup");
const btn_gravarPopup=document.querySelector("#btn_gravarPopup");
const btn_cancelarPopup=document.querySelector("#btn_cancelarPopup");
const f_nome=document.querySelector("#f_nome");
const f_status=document.querySelector("#f_status");
const f_foto=document.querySelector("#f_foto");
const img_foto=document.querySelector("#img_foto");
const f_filtragem=document.querySelector("#f_filtragem");
const pesquisa=document.querySelector("#pesquisa");
const btn_fecharPopupPesq=document.querySelector("#btn_fecharPopupPesq");
const btn_fecharPopupListaContatos=document.querySelector("#btn_fecharPopupListaContatos");
const btn_pesq=document.querySelector("#btn_pesq");
const f_pesqId=document.querySelector("#f_pesqId");
const f_pesqNome=document.querySelector("#f_pesqNome");
const f_pesq=document.querySelector("#f_pesq");
const btn_pesquisar=document.querySelector("#btn_pesquisar");
const btn_listartudo=document.querySelector("#btn_listartudo");
const listaContatosForn=document.querySelector("#listaContatosForn");
const btn_listarContatosForn=document.querySelector("#btn_listarContatosForn");
const dadosGrid_novosContatosForn=document.querySelector("#dadosGrid_novosContatosForn");
const dadosGrid_contatosFornAdd=document.querySelector("#dadosGrid_contatosFornAdd");
const btn_fecharPopuptelefonesContForn=document.querySelector("#btn_fecharPopuptelefonesContForn");
const dadosGrid_telefonesContForn=document.querySelector("#dadosGrid_telefonesContForn");
const telefonesContForn=document.querySelector("#telefonesContForn");

//n=Novo Fornecedor | e=Editar Fornecedor
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

btn_fecharPopupListaContatos.addEventListener("click",(evt)=>{
    listaContatosForn.setAttribute("style",`z-index:-10000 !important`);
    listaContatosForn.classList.add("ocultarPopup");
})

btn_pesq.addEventListener("click",(evt)=>{
    f_pesq.value="";
    f_pesq.focus();
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
        const endpointpesq=`${serv}/pesquisafornecedor/${tipo}/${f_pesq.value}`
        fetch(endpointpesq)
        .then(res=>res.json())
        .then(res=>{
            //console.log(res)
            dadosGrid.innerHTML="";
            res.forEach(e=>{
                criarLinha(e);
            })            
        })
        pesquisa.classList.add("ocultarPopup");
    }else{
        //caixa de mensagem desenvolvida em outro JS mas importada para este => metodo import
        const config={
            titulo:"Alerta",
            texto:"Digite a informação que deseja pesquisar!",
            cor:"rgba(90, 90, 253, 0.92)",
            tipo:"ok",
            ok:()=>{
                console.log("OK clicado!");
                f_pesq.focus();
            },
            sim:()=>{console.log("SIM clicado!");},
            nao:()=>{console.log("NÃO clicado!");}
        }
        Cxmsg.mostrar(config);
        //alert("Preencha o campo de pesquisa.");
        f_pesq.focus();
    }
});

btn_listartudo.addEventListener("click",(ev)=>{
    f_filtragem.value="";
    carga();
})

const criarLinha=(e)=>{
    const divlinha=document.createElement("div");
    divlinha.setAttribute("class","linhaGrid");

    const divc1=document.createElement("div");
    divc1.setAttribute("class","colunaLinhaGrid c1");
    divc1.innerHTML = e.n_fornecedor_fornecedor;
    divlinha.appendChild(divc1);

    const divc2=document.createElement("div");
    divc2.setAttribute("class","colunaLinhaGrid c2");
    divc2.innerHTML = e.s_desc_fornecedor;
    divlinha.appendChild(divc2);

    const divc3=document.createElement("div");
    divc3.setAttribute("class","colunaLinhaGrid c3");
    divc3.innerHTML = e.c_status_fornecedor;
    divlinha.appendChild(divc3);

    const divc4=document.createElement("div");
    divc4.setAttribute("class","colunaLinhaGrid c4");
    divlinha.appendChild(divc4);

    const img_status=document.createElement("img");
    img_status.setAttribute("data-idfornecedor",e.n_fornecedor_fornecedor);
    img_status.setAttribute("class","icone_op");
    if(e.c_status_fornecedor=="A"){
        img_status.setAttribute("src","../../imgs/on.svg");
    }else{
        img_status.setAttribute("src","../../imgs/off.svg");
    }
    let status_fornecedor=e.c_status_fornecedor;
    img_status.addEventListener("click",(evt)=>{
        const idfornecedor=evt.target.dataset.idfornecedor;  
        status_fornecedor=status_fornecedor=="A"?"I":"A";
        const endpoint=`${serv}/statusfornecedor/${idfornecedor}/${status_fornecedor}`;
        fetch(endpoint)
        .then(req=>{
            if(req.status==200){
                divc3.innerHTML = status_fornecedor;
                if(status_fornecedor=="A"){
                    img_status.setAttribute("src","../../imgs/on.svg");
                }else{
                    img_status.setAttribute("src","../../imgs/off.svg");
                }
            }else{
                const config={
                    titulo:"Alerta",
                    texto:"Não foi possível atualizar o status do Fornecedor!",
                    cor:"rgba(90, 90, 253, 0.92)",
                    tipo:"ok",
                    ok:()=>{
                        console.log("OK clicado!");
                    },
                    sim:()=>{console.log("SIM clicado!");},
                    nao:()=>{console.log("NÃO clicado!");}
                }
                Cxmsg.mostrar(config);
                // alert("Não foi possível atualizar o status do Fornecedor!");
            }
        });
    })
    divc4.appendChild(img_status);

    const img_editar=document.createElement("img");
    img_editar.setAttribute("src","../../imgs/editar.svg")
    img_editar.setAttribute("class","icone_op")
    img_editar.addEventListener("click",(evt)=>{
        const id=evt.target.parentNode.parentNode.firstChild.innerHTML;  //Buscando ID da linha do grid onde clicou no lapis
        modojanela="e";
        document.getElementById("tituloPopup").innerHTML="Editar Fornecedor";

        let  endpoint=`${serv}/dadosfornecedor/${id}`;
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            btn_gravarPopup.setAttribute("data-idfornecedor",id);   //guarda o valor do ID em um dataset do botão gravar pra ser recuperado na ação de update (editarfornecedor)
            f_nome.value=res[0].s_desc_fornecedor;
            f_status.value=res[0].c_status_fornecedor;
            //img_foto.setAttribute("src",res.s_foto_pessoa);

            if (res[0].s_logo_fornecedor!="" && res[0].s_logo_fornecedor!=null && res[0].s_logo_fornecedor!="#"){
                img_foto.src=res[0].s_logo_fornecedor;
                novoFornecedor.classList.remove("ocultarPopup");
                if(img_foto.src=="" || img_foto.src=="#"){
                    img_foto.classList.add("esconderElemento");
                }else{
                    img_foto.classList.remove("esconderElemento");
                }
            }else{
                img_foto.classList.add("esconderElemento");
            }
        });

        novoFornecedor.classList.remove("ocultarPopup");
    });
    divc4.appendChild(img_editar);

    const img_remover=document.createElement("img");
    img_remover.setAttribute("src","../../imgs/delete.svg")
    img_remover.setAttribute("class","icone_op")
    img_remover.addEventListener("click",(evt)=>{
        const id=evt.target.parentNode.parentNode.firstChild.innerHTML   //Buscando ID da linha do grid onde clicou no lapis
        const config={
            titulo:"Alerta",
            texto:"Confirmar Exclisão do Fornecedor?",
            cor:"rgba(90, 90, 253, 0.92)",
            tipo:"sn",
            ok:()=>{
                console.log("OK clicado!");
            },
            sim:()=>{deleteFornecedor(id)},
            nao:()=>{console.log("NÃO clicado!");}
        }
        Cxmsg.mostrar(config);
    })
    divc4.appendChild(img_remover);

    dadosGrid.appendChild(divlinha);
}

const addContForn=(id,nome)=>{
    const divlinha=document.createElement("div");
    divlinha.setAttribute("class","linhaGrid");

    const divc1=document.createElement("div");
    divc1.setAttribute("class","colunaLinhaGrid c1_lcf");
    divc1.innerHTML = id;
    divlinha.appendChild(divc1);

    const divc2=document.createElement("div");
    divc2.setAttribute("class","colunaLinhaGrid c2_lcf");
    divc2.innerHTML = nome;
    divlinha.appendChild(divc2);

    const divc3=document.createElement("div");
    divc3.setAttribute("class","colunaLinhaGrid c3_lcf");
    divlinha.appendChild(divc3);

    const img_removerContForn=document.createElement("img");
    img_removerContForn.setAttribute("class","icone_op");
    img_removerContForn.setAttribute("src","../../imgs/delete.svg");
    img_removerContForn.addEventListener("click",(evt)=>{
        evt.target.parentNode.parentNode.remove();  //pega a linha inteira
    })
    divc3.appendChild(img_removerContForn);

    dadosGrid_contatosFornAdd.appendChild(divlinha);
}

const addTelefoneContForn=(telefone)=>{
    const divlinha=document.createElement("div");
    divlinha.setAttribute("class","linhaGrid");

    const divc1=document.createElement("div");
    divc1.setAttribute("class","colunaLinhaGrid c2_lcf");
    divc1.innerHTML = telefone;
    divlinha.appendChild(divc1);

    dadosGrid_telefonesContForn.appendChild(divlinha);
}

const criarLinhaContForn=(e)=>{
    const divlinha=document.createElement("div");
    divlinha.setAttribute("class","linhaGrid");

    const divc1=document.createElement("div");
    divc1.setAttribute("class","colunaLinhaGrid c1_lcf");
    divc1.innerHTML = e.n_pessoa_pessoa;
    divlinha.appendChild(divc1);

    const divc2=document.createElement("div");
    divc2.setAttribute("class","colunaLinhaGrid c2_lcf");
    divc2.innerHTML = e.s_nome_pessoa;
    divlinha.appendChild(divc2);

    const divc3=document.createElement("div");
    divc3.setAttribute("class","colunaLinhaGrid c3_lcf");
    divlinha.appendChild(divc3);

    const img_addContForn=document.createElement("img");
    img_addContForn.setAttribute("class","icone_op");
    img_addContForn.setAttribute("src","../../imgs/addContForn.svg");
    img_addContForn.addEventListener("click",(evt)=>{
        const linha=evt.target.parentNode.parentNode;  //pega a linha inteira
        //dadosGrid_contatosFornAdd.appendChild(linha);
        const id=linha.childNodes[0].innerHTML;
        const nome=linha.childNodes[1].innerHTML;
        addContForn(id,nome);
    })
    divc3.appendChild(img_addContForn);

    const img_verFoneContForn=document.createElement("img");
    img_verFoneContForn.setAttribute("src","../../imgs/verTelefone.svg")
    img_verFoneContForn.setAttribute("class","icone_op")
    img_verFoneContForn.addEventListener("click",(evt)=>{
        const id=evt.target.parentNode.parentNode.firstChild.innerHTML;  //Buscando ID da linha do grid onde clicou no lapis
        document.getElementById("tituloPopup").innerHTML="Editar Fornecedor";
        console.log(id);
        let endpoint=`${serv}/retornaTelefones/${id}`
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            const mzi=maiorZIndex()+2;
            telefonesContForn.setAttribute("style",`z-index:${mzi} !important`)
            dadosGrid_telefonesContForn.innerHTML="";
            telefonesContForn.classList.remove("ocultarPopup");
            res.forEach(e=>{
                addTelefoneContForn(e.s_numero_telefone);
            })
        })
        //novoFornecedor.classList.remove("ocultarPopup");
    });
    divc3.appendChild(img_verFoneContForn);

    dadosGrid_novosContatosForn.appendChild(divlinha);
}

btn_fecharPopuptelefonesContForn.addEventListener("click",(evt)=>{
    telefonesContForn.classList.add("ocultarPopup");
    telefonesContForn.setAttribute("style",`z-index:-1000 !important`)
})

const carga=()=>{
    const endpoint=`${serv}/todosfornecedores`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
         // console.log(res);
         dadosGrid.innerHTML="";
         res.forEach(e=>{
             criarLinha(e);
         })
    })
};

carga();

btn_add.addEventListener("click",(evt)=>{
    document.getElementById("tituloPopup").innerHTML="Novo Fornecedor";
    novoFornecedor.classList.remove("ocultarPopup");
    modojanela="n";
    img_foto.classList.add("esconderElemento");
    limparFornecedor();
});

btn_fecharPopup.addEventListener("click",(evt)=>{
    novoFornecedor.classList.add("ocultarPopup");
})

btn_fecharPopupPesq.addEventListener("click",(evt)=>{
    pesquisa.classList.add("ocultarPopup");
})

btn_pesq.addEventListener("click",(evt)=>{
    pesquisa.classList.remove("ocultarPopup");
})

btn_cancelarPopup.addEventListener("click",(evt)=>{
    novoFornecedor.classList.add("ocultarPopup");
})

btn_gravarPopup.addEventListener("click",(evt)=>{
    const tels=[...document.querySelectorAll(".novoTel")];  //só vai inserir na base os novos telefones
    let numTels=[];
    tels.forEach(t=>{
        numTels.push(t.innerHTML);
    })

    const dados={
        n_fornecedor_fornecedor:evt.target.dataset.idfornecedor,
        s_desc_fornecedor:f_nome.value,
        c_status_fornecedor:f_status.value,
        s_logo_fornecedor:img_foto.getAttribute("src")
    }
    
    const cab={
        method:'post',
        body:JSON.stringify(dados)
    }

    let endpoint=null;
    if(modojanela=="n"){
        endpoint=`${serv}/novofornecedor`;
    }else{
        endpoint=`${serv}/editarfornecedor`;
    }

    fetch(endpoint,cab)
    .then(res=>{
        if(res.status == 200)    {
            if(modojanela=="n"){
                const config={
                    titulo:"Alerta",
                    texto:"Novo Fornecedor gravado gravado com sucesso!",
                    cor:"rgba(90, 90, 253, 0.92)",
                    tipo:"ok",
                    ok:()=>{
                        console.log("OK clicado!");
                    },
                    sim:()=>{console.log("SIM clicado!");},
                    nao:()=>{console.log("NÃO clicado!");}
                }
                Cxmsg.mostrar(config);
                // alert("Novo Fornecedor gravado gravado com sucesso!");
                limparFornecedor();
            }else{
                const config={
                    titulo:"Alerta",
                    texto:"Dados do Fornecedor atualizados com sucesso!",
                    cor:"rgba(90, 90, 253, 0.92)",
                    tipo:"ok",
                    ok:()=>{
                        console.log("OK clicado!");
                        if(modojanela!="n"){
                            novoFornecedor.classList.add("ocultarPopup");
                        }                    
                    },
                    sim:()=>{console.log("SIM clicado!");},
                    nao:()=>{console.log("NÃO clicado!");}
                }
                Cxmsg.mostrar(config);
                // alert("Dados do Fornecedor atualizados com sucesso!");
                modojanela=="n" ? limparFornecedor(): modojanela="e";
            }
            f_nome.focus();
            carga();
        }else{
            const config={
                titulo:"Alerta",
                texto:"Erro ao gravar novo Fornecedor!",
                cor:"rgba(90, 90, 253, 0.92)",
                tipo:"ok",
                ok:()=>{
                    console.log("OK clicado!");
                },
                sim:()=>{console.log("SIM clicado!");},
                nao:()=>{console.log("NÃO clicado!");}
            }
            Cxmsg.mostrar(config);
            // alert("Erro ao gravar novo Fornecedor")
        }
    }).finally(()=>{
        img_foto.classList.add("esconderElemento");
    })
    //novoFornecedor.classList.add("ocultarPopup");
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
    // console.log(evt.target.files[0]=="" || evt.target.files[0]== null?"vazio":"OK");
    if(evt.target.files[0]!="" && evt.target.files[0]!=null){
        img_foto.classList.remove("esconderElemento");
    }else{
        img_foto.classList.add("esconderElemento");
        img_foto.src="#";
    }
    converte_imagem_b64(img_foto,evt.target.files[0]);
})

const limparFornecedor=()=>{
    f_nome.value="";
    f_status.value="";
    f_foto.value="";
    img_foto.setAttribute("src","#");
    img_foto.classList.add("esconderElemento");
}

const deleteFornecedor=(idForn)=>{
    const endpoint=`${serv}/deleteFornecedor/${idForn}`
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            const config={
                titulo:"Alerta",
                texto:"Exclusão realizado com sucesso!",
                cor:"rgba(90, 90, 253, 0.92)",
                tipo:"ok",
                ok:()=>{console.log("OK clicado!");},
                sim:()=>{console.log("SIM clicado!");},
                nao:()=>{console.log("NÃO clicado!");}
            }
            Cxmsg.mostrar(config);
        }else{
            const config={
                titulo:"Alerta",
                texto:"A tentativa de Exclusão do fornecedor falhou!",
                cor:"rgba(90, 90, 253, 0.92)",
                tipo:"ok",
                ok:()=>{console.log("OK clicado!");},
                sim:()=>{console.log("SIM clicado!");},
                nao:()=>{console.log("NÃO clicado!");}
            }
            Cxmsg.mostrar(config);
        }
    }) 
    carga();   
}

btn_listarContatosForn.addEventListener("click",(evt)=>{
    listaContatosForn.classList.remove("ocultarPopup");

    const mzi = maiorZIndex() + 1;  //seta o z-index para o maior valor para que o popup apareca na frente dos outros
    listaContatosForn.setAttribute("style",`z-index:${mzi} !important`);
    dadosGrid_novosContatosForn.innerHTML="";

    let endpoint=`${serv}/todaspessoasForn`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(e=>{
            criarLinhaContForn(e);
        })
    })
})

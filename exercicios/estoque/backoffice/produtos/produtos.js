import {Cxmsg} from "../../utils/cxmsg.js";

const dadosGrid=document.querySelector("#dadosGrid");
const btn_add=document.querySelector("#btn_add");
const novoProduto=document.querySelector("#novoProduto");
const f_tipoprod=document.querySelector("#f_tipoprod");
const f_fornprod=document.querySelector("#f_fornprod");
const f_statusprod=document.querySelector("#f_statusprod");
const f_codprod=document.querySelector("#f_codprod");
const f_descprod=document.querySelector("#f_descprod");
const f_qtdeprod=document.querySelector("#f_qtdeprod");

const btn_gravarmov=document.querySelector("#btn_gravarmov");
const btn_addqtde=document.querySelector("#btn_addqtde");
const btn_removeqtde=document.querySelector("#btn_removeqtde");
const btn_fecharPopup=document.querySelector("#btn_removeqtde");
const btn_gravarPopup=document.querySelector("#btn_gravarPopup");
const btn_cancelarPopup=document.querySelector("#btn_cancelarPopup");
const f_filtragem=document.querySelector("#f_filtragem");
const pesquisa=document.querySelector("#pesquisa");
const btn_fecharPopupPesq=document.querySelector("#btn_fecharPopupPesq");
const btn_fecharPopupMov=document.querySelector("#btn_fecharPopupMov");
const btn_pesq=document.querySelector("#btn_pesq");
const f_pesqId=document.querySelector("#f_pesqId");
const f_pesqNome=document.querySelector("#f_pesqNome");
const f_pesq=document.querySelector("#f_pesq");
const btn_pesquisar=document.querySelector("#btn_pesquisar");
const btn_listartudo=document.querySelector("#btn_listartudo");
const movEstoque=document.querySelector("#movEstoque");
const f_codprodmov=document.querySelector("#f_codprodmov");
const f_descprodmov=document.querySelector("#f_descprodmov");
const f_qtdeprodmov=document.querySelector("#f_qtdeprodmov");
const f_qtdeprodregmov=document.querySelector("#f_qtdeprodregmov");


//n=Novo Produto | e=Editar Produto
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
btn_fecharPopupMov.addEventListener("click",(evt)=>{
    movEstoque.classList.add("ocultarPopup");
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
        const endpointpesq=`${serv}/pesquisaprod/${tipo}/${f_pesq.value}`
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
    carga();
})

const criarLinha=(e)=>{
    const divlinha=document.createElement("div");
    divlinha.setAttribute("class","linhaGrid");

    const divc1=document.createElement("div");
    divc1.setAttribute("class","colunaLinhaGrid c1");
    divc1.innerHTML = e.n_cod_produto;
    divlinha.appendChild(divc1);

    const divc2=document.createElement("div");
    divc2.setAttribute("class","colunaLinhaGrid c2");
    divc2.innerHTML = e.s_desc_produto;
    divlinha.appendChild(divc2);

    const divc3=document.createElement("div");
    divc3.setAttribute("class","colunaLinhaGrid c3");
    divc3.innerHTML = e.n_qtde_produto;
    divlinha.appendChild(divc3);

    const divc4=document.createElement("div");
    divc4.setAttribute("class","colunaLinhaGrid c4");
    divc4.innerHTML = e.c_status_produto;
    divlinha.appendChild(divc4);

    const divc5=document.createElement("div");
    divc5.setAttribute("class","colunaLinhaGrid c5");
    divlinha.appendChild(divc5);

    const img_status=document.createElement("img");
    img_status.setAttribute("data-idprod",e.n_cod_produto);
    img_status.setAttribute("class","icone_op");
    if(e.c_status_produto=="A"){
        img_status.setAttribute("title","Inativar Produto")
        img_status.setAttribute("src","../../imgs/on.svg");
    }else{
        img_status.setAttribute("title","Ativar Produto")
        img_status.setAttribute("src","../../imgs/off.svg");
    }
    let status_prod=e.c_status_produto;
    img_status.addEventListener("click",(evt)=>{
        const idprod=evt.target.dataset.idprod;  
        status_prod=status_prod=="A"?"I":"A";
        const endpoint_statusprod=`${serv}/statusprod/${idprod}/${status_prod}`;
        fetch(endpoint_statusprod)
        .then(req=>{
            if(req.status==200){
                divc4.innerHTML = status_prod;
                if(status_prod=="A"){
                    img_status.setAttribute("title","Inativar Produto")
                    img_status.setAttribute("src","../../imgs/on.svg");
                }else{
                    img_status.setAttribute("title","Ativar Produto")
                    img_status.setAttribute("src","../../imgs/off.svg");
                }
            }else{
                const config={
                    titulo:"Alerta",
                    texto:"Não foi possível atualizar o status do Produto!",
                    cor:"rgba(90, 90, 253, 0.92)",
                    tipo:"ok",
                    ok:()=>{
                        console.log("OK clicado!");
                    },
                    sim:()=>{console.log("SIM clicado!");},
                    nao:()=>{console.log("NÃO clicado!");}
                }
                Cxmsg.mostrar(config);
                // alert("Não foi possível atualizar o status do Produto!");
            }
        });
    })
    divc5.appendChild(img_status);

    const img_editar=document.createElement("img");
    img_editar.setAttribute("src","../../imgs/editar.svg")
    img_editar.setAttribute("class","icone_op")
    img_editar.setAttribute("title","Editar Produto")
    img_editar.addEventListener("click",(evt)=>{
        const id=evt.target.parentNode.parentNode.firstChild.innerHTML;  //Buscando ID da linha do grid onde clicou no lapis
        modojanela="e";
        document.getElementById("tituloPopup").innerHTML="Editar Produto";

        let  endpoint_dadosprod=`${serv}/dadosprod/${id}`;
        fetch(endpoint_dadosprod)
        .then(res=>res.json())
        .then(res=>{
            btn_gravarPopup.setAttribute("data-idprod",id);   //guarda o valor do ID em um dataset do botão gravar pra ser recuperado na ação de update (editarcolab)
            f_codprod.value=res[0].n_cod_produto;
            f_tipoprod.value=res[0].n_tipoproduto_tipoproduto;
            f_statusprod.value=res[0].c_status_produto;
            f_descprod.value=res[0].s_desc_produto;
            f_fornprod.value=res[0].n_fornecedor_fornecedor;
            f_qtdeprod.value=res[0].n_qtde_produto;
            novoProduto.classList.remove("ocultarPopup");
        });

        novoProduto.classList.remove("ocultarPopup");
    });
    divc5.appendChild(img_editar);

    const img_movimentar=document.createElement("img");
    img_movimentar.setAttribute("src","../../imgs/mov_b.svg")
    img_movimentar.setAttribute("class","icone_op")
    img_movimentar.setAttribute("title","Movimentação do Produto")
    img_movimentar.addEventListener("click",(evt)=>{
        const l  = evt.target.parentNode.parentNode;
        //console.log(st);
        if(l.childNodes[3].innerHTML == "A"){  //estamos veriicando aqui o que consta em nossa tela mas o ideal é criar uma API e verificar na base pq outra terminal pode ter alterado
            f_codprodmov.value=l.childNodes[0].innerHTML;
            f_descprodmov.value=l.childNodes[1].innerHTML;
            f_qtdeprodmov.value=l.childNodes[2].innerHTML;
            movEstoque.classList.remove("ocultarPopup")

        }else{
            const config={
                titulo:"Alerta",
                texto:"Produto com Status Inativo Não pode ser Movimentado!",
                cor:"rgba(90, 90, 253, 0.92)",
                tipo:"ok",
                ok:()=>{
                    console.log("OK clicado!");
                },
                sim:()=>{console.log("SIM clicado!");},
                nao:()=>{console.log("NÃO clicado!");}
            }
            Cxmsg.mostrar(config);
        }
    })

    divc5.appendChild(img_movimentar);

    dadosGrid.appendChild(divlinha);
}

const endpoint_tiposcolab=`${serv}/tiposprod`;
fetch(endpoint_tiposcolab)
.then(res=>res.json())
.then(res=>{
    f_tipoprod.innerHTML="";
    res.forEach(e=>{
        const opt=document.createElement("option");
        opt.setAttribute("value",e.n_tipoproduto_tipoproduto);
        opt.innerHTML=e.s_desc_tipoproduto;
        f_tipoprod.appendChild(opt);
    });
});

const carga=()=>{
    const endpoint_tiposprod=`${serv}/tiposprod`;
    fetch(endpoint_tiposprod)
    .then(res=>res.json())
    .then(res=>{
        f_tipoprod.innerHTML="";
        res.forEach(e=>{
            const opt=document.createElement("option");
            opt.setAttribute("value",e.n_tipoproduto_tipoproduto);
            opt.innerHTML=e.s_desc_tipoproduto;
            f_tipoprod.appendChild(opt);
        })
    })

    const endpoint_fornprod=`${serv}/fornprod`;
    fetch(endpoint_fornprod)
    .then(res=>res.json())
    .then(res=>{
        f_fornprod.innerHTML="";
        res.forEach(e=>{
            const opt=document.createElement("option");
            opt.setAttribute("value",e.n_fornecedor_fornecedor);
            opt.innerHTML=e.s_desc_fornecedor;
            f_fornprod.appendChild(opt);
        })
    })

    const endpoint_todosProdutos=`${serv}/todosprod`;
    fetch(endpoint_todosProdutos)
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

btn_gravarmov.addEventListener("click",(evt)=>{

});

btn_addqtde.addEventListener("click",(evt)=>{
    let qtdeatual = parseInt(f_qtdeprodmov.value);
    let qtdeadd = parseInt(f_qtdeprodregmov.value);

    qtdeatual += qtdeadd;

    f_qtdeprodmov.value = qtdeatual;
    f_qtdeprodregmov.value="0";
});

btn_removeqtde.addEventListener("click",(evt)=>{
    let qtdeatual = parseInt(f_qtdeprodmov.value);
    let qtderem = parseInt(f_qtdeprodregmov.value);

    if((qtdeatual-qtderem) >= 0){
        qtdeatual -= qtderem;
        f_qtdeprodmov.value = qtdeatual;
        f_qtdeprodregmov.value="0";
    }else{
        const config={
            titulo:"Alerta",
            texto:"Estoque insuficiente!",
            cor:"rgba(90, 90, 253, 0.92)",
            tipo:"ok",
            ok:()=>{
                console.log("OK clicado!");
            },
            sim:()=>{console.log("SIM clicado!");},
            nao:()=>{console.log("NÃO clicado!");}
        }
        Cxmsg.mostrar(config);
    }
});

btn_add.addEventListener("click",(evt)=>{
    document.getElementById("tituloPopup").innerHTML="Novo Produto";
    novoProduto.classList.remove("ocultarPopup");
    modojanela="n";
    limparProduto();
});

btn_fecharPopup.addEventListener("click",(evt)=>{
    novoProduto.classList.add("ocultarPopup");
})

btn_fecharPopupPesq.addEventListener("click",(evt)=>{
    pesquisa.classList.add("ocultarPopup");
})

btn_pesq.addEventListener("click",(evt)=>{
    pesquisa.classList.remove("ocultarPopup");
})

btn_cancelarPopup.addEventListener("click",(evt)=>{
    novoProduto.classList.add("ocultarPopup");
})

btn_gravarPopup.addEventListener("click",(evt)=>{
    const dados={
        n_cod_produto:f_codprod.value,
        n_tipoproduto_tipoproduto:f_tipoprod.value,
        s_desc_produto:f_descprod.value,
        n_fornecedor_fornecedor:f_fornprod.value,
        n_qtde_produto:f_qtdeprod.value,
        c_status_produto:f_statusprod.value
    }
    
    const cab={
        method:'post',
        body:JSON.stringify(dados)
    }

    let endpointnovoeditarprod=null;
    if(modojanela=="n"){
        endpointnovoeditarprod=`${serv}/novoprod`;
    }else{
        endpointnovoeditarprod=`${serv}/editarprod`;
    }

    //ESTUDAR MODO DE CHAMADA DE API -> SYNC AWAIT, o fetch é assincrono ele executa a chamada e libero o codigo para continuar o processamento, sync await aguarda a resposta

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);   //5 segundos
    clearTimeout(timeoutId);

    fetch(endpointnovoeditarprod,cab)
    .then(res=>{
        clearTimeout(timeoutId);
        if(res.status == 200)    {
            if(modojanela=="n"){
                const config={
                    titulo:"Alerta",
                    texto:"Novo Produto adicionado com sucesso!",
                    cor:"rgba(90, 90, 253, 0.92)",
                    tipo:"ok",
                    ok:()=>{
                        console.log("OK clicado!");
                    },
                    sim:()=>{console.log("SIM clicado!");},
                    nao:()=>{console.log("NÃO clicado!");}
                }
                Cxmsg.mostrar(config);
                // alert("Novo Produto gravado gravado com sucesso!");
                limparProduto();
            }else{
                const config={
                    titulo:"Alerta",
                    texto:"Produto atualizado com sucesso!",
                    cor:"rgba(90, 90, 253, 0.92)",
                    tipo:"ok",
                    ok:()=>{
                        console.log("OK clicado!");
                    },
                    sim:()=>{console.log("SIM clicado!");},
                    nao:()=>{console.log("NÃO clicado!");}
                }
                Cxmsg.mostrar(config);
                // alert("Dados do Produto atualizados com sucesso!");
                modojanela=="n" ? limparProduto(): modojanela="e";
            }
            f_codprod.focus();
            carga();
        }else{
            const config={
                titulo:"Alerta",
                texto:"Erro ao gravar nova Pessoa!",
                cor:"rgba(90, 90, 253, 0.92)",
                tipo:"ok",
                ok:()=>{
                    console.log("OK clicado!");
                },
                sim:()=>{console.log("SIM clicado!");},
                nao:()=>{console.log("NÃO clicado!");}
            }
            Cxmsg.mostrar(config);
            // alert("Erro ao gravar novo Produto")
        }
    })
    .finally(()=>{
        clearTimeout(timeoutId);
    })
    //novoProduto.classList.add("ocultarPopup");
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

const limparProduto=()=>{
    f_codprod.value="";
    f_descprod.value="";
    f_qtdeprod.value="1";
    f_tipoprod.value="-1";
    f_fornprod.value="-1";
    f_statusprod.value="A";
}

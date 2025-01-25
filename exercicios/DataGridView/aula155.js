const configdgv={
    endpoint: "http://127.0.0.1:1880/produto",
    idDestino:"dgvDados",
}
const dgv=(configdgv)=>{
    const dgvDados=document.getElementById(configdgv.idDestino);
    dgvDados.innerHTML="";  //para limpar os dados da grid

    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        //console.log(res);
        res.forEach(el => {
            const dgvLinha=document.createElement("div");
            dgvLinha.setAttribute("class","dgvLinha");

            const c1=document.createElement("div");
            c1.setAttribute("class","coluna c1")
            c1.innerHTML=el.n_id_produto;
            dgvLinha.appendChild(c1);

            const c2=document.createElement("div");
            c2.setAttribute("class","coluna c2")
            c2.innerHTML=el.s_nome_produto;
            dgvLinha.appendChild(c2);

            const c3=document.createElement("div");
            c3.setAttribute("class","coluna c3")
            c3.innerHTML=el.s_marca_produto;
            dgvLinha.appendChild(c3);

            const c4=document.createElement("div");
            c4.setAttribute("class","coluna c4")
            c4.innerHTML=el.s_modelo_produto;
            dgvLinha.appendChild(c4);

            const c5=document.createElement("div");
            c5.setAttribute("class","coluna c5")
            dgvLinha.appendChild(c5);

            const imgEditar=document.createElement("img");
            imgEditar.setAttribute("class","dgvIcone")
            imgEditar.setAttribute("src","../imagens/editar.svg")
            imgEditar.addEventListener("click",(evt)=>{
                document.querySelector("#janelaEditar").classList.remove("ocultar");
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint=`http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    document.querySelector("#f_ideditar").value = res[0].n_id_produto;
                    document.querySelector("#f_produtoeditar").value = res[0].s_nome_produto;
                    document.querySelector("#f_marcaeditar").value = res[0].s_marca_produto;
                    document.querySelector("#f_modeloeditar").value = res[0].s_modelo_produto;
                })
            })
            c5.appendChild(imgEditar);

            const imgExibir=document.createElement("img");
            imgExibir.setAttribute("class","dgvIcone")
            imgExibir.setAttribute("src","../imagens/exibir.svg")
            imgExibir.addEventListener("click",(evt)=>{
                document.querySelector(".janelaView").classList.remove("ocultar");
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint=`http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res=>res.json())
                .then(res=>{
                    document.querySelector("#f_id").value = res[0].n_id_produto;
                    document.querySelector("#f_produto").value = res[0].s_nome_produto;
                    document.querySelector("#f_marca").value = res[0].s_marca_produto;
                    document.querySelector("#f_modelo").value = res[0].s_modelo_produto;
                })
            })
            c5.appendChild(imgExibir);

            const imgDelete=document.createElement("img");
            imgDelete.setAttribute("class","dgvIcone")
            imgDelete.setAttribute("src","../imagens/lixeira.svg")
            imgDelete.addEventListener("click",(evt)=>{
                //console.log(evt.target.parentNode.parentNode.firstChild.innerHTML);
                const id=evt.target.parentNode.parentNode.firstChild.innerHTML;
                const linha=evt.target.parentNode.parentNode;
                const endpoint=`http://127.0.0.1:1880/removerproduto/${id}`;
                fetch(endpoint)
                .then(res=>{
                    if(res.status==200){ //confirma que a exclusão foi bem sucedida pela API no banco de dados
                        //neste caso remove a linha do grid
                        linha.remove();
                    };
                })
            })

            c5.appendChild(imgDelete);

            dgvDados.appendChild(dgvLinha);

        });

    })    
}

dgv(configdgv);

//Ocular a janela de View
document.querySelector("#btn_ok").addEventListener("click",(evt)=>{
    document.querySelector(".janelaView").classList.add("ocultar");
});

//Ocultar a janela editar
document.querySelector("#btn_gravar").addEventListener("click",(evt)=>{
    const id=document.querySelector("#f_ideditar").value;
    const produto=document.querySelector("#f_produtoeditar").value;
    const marca=document.querySelector("#f_marcaeditar").value;
    const modelo=document.querySelector("#f_modeloeditar").value;

    const endpoint=`http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status==200){
            document.querySelector("#janelaEditar").classList.add("ocultar");
            dgv(configdgv);
        }else{
            alert(`Erro ao Atualizar ${res.status}!`);
        }
    })  

    //document.querySelector("#janelaEditar").classList.add("ocultar");
});

document.querySelector("#btn_cancelar").addEventListener("click",(evt)=>{
    document.querySelector("#janelaEditar").classList.add("ocultar");
});



// <div class="dgvLinha">
    // <div class="c1">01</div>
    // <div class="c2">Processador</div>
    // <div class="c3">Intel</div>
    // <div class="c4">i7</div>
    // <div class="c5">D E V</div>
// </div>
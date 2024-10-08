import { contatos } from "./bancoContatos.js";

let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_contato){
        return contatos[i_contato]
    },
    addContato:function(novoContato,destinoDOM){
        //Adiciona no bancoContatos
        const cont={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)

        //Adiciona no DOM
        destinoDOM.innerHTML=""
        contatos.forEach((c)=>{
            const div=document.createElement("div")
            div.setAttribute("class","contato")
            const p_nome=document.createElement("p")
            p_nome.innerHTML=c.nome
            const p_telefone=document.createElement("p")
            p_telefone.innerHTML=c.telefone    
            const p_email=document.createElement("p")
            p_email.innerHTML=c.email    
    
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            destinoDOM.appendChild(div)
        })
    }

}

export default contato
function aluno(nome, nota){
    this.nome = nome   /*this.nome é um elemento da minha funcao chamado nome que recebe o parametro chamado nome*/
    this.nota = nota

    this.dados_anonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000);
    }

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        })
    }
}

const al1 = new aluno('Bruno',10)
al1.dados_anonimo()
al1.dados_arrow()
function fabricaPessoa(nome, sobrenome) {
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    function nomeCompleto(){
        return `${pessoa.nome} ${pessoa.sobrenome}`;
    }

    pessoa.nomeCompleto = nomeCompleto;  /* Torna a função interna (privada) para publica*/

    return pessoa;
}

let pessoaA = fabricaPessoa('Felipe', 'Albuquerque')
console.log(pessoaA.nomeCompleto())
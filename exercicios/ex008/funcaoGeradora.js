function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Amarelo'
    yield 'Azul'

}

/* a função executa até um um ponto especifico até encontrar um yield*/

const itc=cores()  /* pra reiniciar tem que fazer uma nova declaração (interator)*/
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ', seu esporte favorito é ' + esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value)

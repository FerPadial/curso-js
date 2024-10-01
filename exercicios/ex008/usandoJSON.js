const pessoa={
    nome:'Bruno',
    canal:'CFB Cursos',
    curso: 'JavaScript',
    aulas:{
        aula01:'Introdução',
        aula02:'Variáveis',
        aula03:'Condicional'
    }
}

const string_pessoa='{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa=JSON.stringify(pessoa) //converte objeto para uma string json
const o_json_pessoa=JSON.parse(string_pessoa) //converte um JSON para objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)
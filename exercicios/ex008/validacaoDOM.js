const f_nome=document.getElementById("f_nome")
const f_nota=document.getElementById("f_nota")
const f_msg=document.getElementById("f_msg")


document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let msg=null

    if(f_nota.validity.valueMissing){
        msg="-ATENÇÃO- Este campo é obrigatório!"  //mensagem customizada
    } else if(f_nota.validity.rangeOverflow){
        msg="-ATENÇÃO- Valor de Nota acima do range permitido!"  //mensagem customizada
    } else if(f_nota.validity.rangeUnderflow){
        msg="-ATENÇÃO- Valor de Nota abaixo do range permitido!"  //mensagem customizada
    }

    f_msg.innerHTML=msg
    evt.preventDefault()  // indica que o form do DOM não deve executar o submit do form

})



// document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
//     let estadoValidacao=f_nota.validity

//     if(estadoValidacao.valueMissing){
//         f_nota.setCustomValidity("-ATENÇÃO- Este campo é obrigatório!")  //mensagem customizada
//     } else if(estadoValidacao.rangeOverflow){
//         f_nota.setCustomValidity("-ATENÇÃO- Valor de Nota acima do range permitido!")  //mensagem customizada
//     } else if(estadoValidacao.rangeUnderflow){
//         f_nota.setCustomValidity("-ATENÇÃO- Valor de Nota abaixo do range permitido!")  //mensagem customizada
//     }

//     //f_nota.reportValidity()  // deste jeito a msg aparece como uma tarja no proprio campo
//     f_msg.innerHTML=f_nota.validationMessage
//     evt.preventDefault()  // indica que o form do DOM não deve executar o submit do form

// })


/*
METODOS DE VALIDACAO DO DOM
checkValidity()
setCustomValidity()

Propriedades de validação do DOM
--------------------------------
validity
validationMessage

Propriedades de validação
-------------------------
customError: true, se uma mensagem de validação personalizada for definida
patternMismatch: true, se o valor de um elemento não correponsder ao seu atributo padrão
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max
rangeUnderflow: true, se o valor de um elemento for menor que o seu atributo min
stepMismatch: true, se o valor de um elemento for invalido por seu atributo step
toolong: true, se o valor de um elemento exceder seu atributo maxLenght
typeMismatch: true, se o valor de um elemento for invalido por seu atributo type
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor
valid: true, se o valor de um elemento for valido
*/
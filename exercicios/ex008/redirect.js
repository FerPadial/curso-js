const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    //window.location="https://www.google.com.br"   //Redireciona pra um link interno ou externo, consigo utilizar o voltar, avançar e atualizar do browser
    //window.location.replace("https://www.google.com.br") //o replace substitui o URL anterior pela que está sendo passada como parametro então desabilita o Voltar pq a anterior não existe mais no hitórico
    //window.location.assign("https://www.google.com.br") //faz o mesmo que o replace mas mantem o histório en o botão voltar do browser continua ativo
    // window.location.reload() // é o mesmo que atualizar ou F5 do browser
    // window.history.back()
    // window.history.foward()
    // window.history.go(5)  //coloca valors positivos ou negativoas informando qtas paginas quer avançar ou retroceder
    // window.history.length //tamanho do histórico

    window.location = url.value
    

})
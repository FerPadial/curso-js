class Login{
    //setando propriedades
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilocss=null;
    static callback_ok=null;
    static callback_nok=null;
    static config={
        cor: null,  //"#048",
        img: null,  //"../imagens/olho.JPG"
        endpoint: null, //"https://2e790ad7-f96e-4e43-aeb8-2e58744aa4c6-00-zxiuoxj8cgrj.riker.replit.dev/?matricula=123&senha=321"
    };
    
    //Criando o metodo da classe
    static login=(callback_ok,callback_nok,config=null)=>{
        if(config!=null){
            this.config=config;
        }

        this.callback_ok=()=>{callback_ok()};
        this.callback_nok=()=>{callback_nok()};

        this.estilocss=
        ".fundoLogin {display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0,0,0,0.75);box-sizing: border-box;}"+
        ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;}"+
        ".elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 30%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        ".logoLogin{display: flex;justify-content: center;align-items: center;width: 20%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        ".logoLogin img{width: 100%;border-radius: 85px 85px 85px 85px;box-sizing: inherit;}"+
        ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}"+
        ".campoLogin label{font-size: 18px;}"+
        ".campoLogin input{font-size: 18px;padding: 5px;background-color: #dbdada;border-radius: 5px;}"+
        ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 97%;box-sizing: inherit;}"+
        `.botoesLogin button{cursor: pointer;background-color: ${this.config.cor};color: #fff;border-radius: 5px;padding: 10px;width: 100px;box-sizing: inherit;}`;

        // GERANDO O HTML DENTRO DO JAVASCRIPT
        // <link rel="stylesheet" type="text/css" href="estilo40.css">
        const styleEstilo=document.createElement("style");
        styleEstilo.setAttribute("id","id_estiloLogin")
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo)

        //        <div id="fundoLogin" class="fundoLogin"></div>
        const fundoLogin=document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        document.body.prepend(fundoLogin);  //Adiciona no começo

        //      <div id="baseLogin" class="baseLogin">
        const baseLogin=document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class","baseLogin");
        fundoLogin.appendChild(baseLogin);

        //      <div id="elementosLogin" class="elementosLogin">
        const elementosLogin=document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        baseLogin.appendChild(elementosLogin);

        //      <div class="campoLogin">
        const campoLoginUsername=document.createElement("div");
        campoLoginUsername.setAttribute("id","campoLoginUsername");
        campoLoginUsername.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

            //      <label>Username</label>
            const labelUsername=document.createElement("label");
            labelUsername.innerHTML = "Username"
            campoLoginUsername.appendChild(labelUsername);

            //      <input type="text" name="f_username" id="f_username">
            const inputUsername=document.createElement("input");
            inputUsername.setAttribute("id","f_Username");
            inputUsername.setAttribute("type","text");
            inputUsername.setAttribute("name","f_Username");
            campoLoginUsername.appendChild(inputUsername);

        //      <div class="campoLogin">
        const campoLoginSenha=document.createElement("div");
        campoLoginSenha.setAttribute("id","campoLoginSenha");
        campoLoginSenha.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginSenha);

            //      <label>Senha</label>
            const labelSenha=document.createElement("label");
            labelSenha.innerHTML = "Senha"
            campoLoginSenha.appendChild(labelSenha);

            //      <input type="password" name="f_senha" id="f_senha">
            const inputSenha=document.createElement("input");
            inputSenha.setAttribute("id","f_senha");
            inputSenha.setAttribute("type","password");
            inputSenha.setAttribute("name","f_senha");
            campoLoginSenha.appendChild(inputSenha);       
            
        //    <div class="botoesLogin"> 
        const botoesLogin=document.createElement("div");
        botoesLogin.setAttribute("class","botoesLogin");
        elementosLogin.appendChild(botoesLogin);

            //           <button id="btn_login">Login</button> ok
            const btnLogin=document.createElement("button");
            btnLogin.setAttribute("id","btnLogin")
            btnLogin.innerHTML="Login"
            btnLogin.addEventListener("click",(evt)=>{this.verificaLogin()})
            botoesLogin.appendChild(btnLogin)

            //           <button id="btn_cancelar">Cancelar</button> ok
            const btnCancelar=document.createElement("button");
            btnCancelar.setAttribute("id","btnCancelar")
            btnCancelar.innerHTML="Cancelar"
            btnCancelar.addEventListener("click",(evt)=>{this.fechar()});
            botoesLogin.appendChild(btnCancelar)

        //    <div id="logoLogin" class="logoLogin"> 
        const logoLogin=document.createElement("div");
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute("class","logoLogin");
        baseLogin.appendChild(logoLogin);

            //           <img src="../imagens/olho.JPG" alt="" title="CFBCursos"> ok
            const imgLogoLogin=document.createElement("img");
            imgLogoLogin.setAttribute("src",this.config.img)
            imgLogoLogin.setAttribute("title","CFBCursos")
            logoLogin.appendChild(imgLogoLogin)
    }

    static verificaLogin=()=>{
        const mat = document.querySelector("#f_Username").value;
        const pas = document.querySelector("#f_senha").value;

        const endpoint=`${this.config.endpoint}/?matricula=${mat}&senha=${pas}`;
        //https://2e790ad7-f96e-4e43-aeb8-2e58744aa4c6-00-zxiuoxj8cgrj.riker.replit.dev/


        console.log(this.endpoint);

        //consumir o endpoint 
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                sessionStorage.setItem("logado", "true");
                sessionStorage.setItem("matlogado", mat);
                sessionStorage.setItem("nomelogado",res.nome);
                sessionStorage.setItem("acessologado", res.acesso);
                this.callback_ok();
                this.fechar();

            } else {
                sessionStorage.setItem("logado", "false");
                sessionStorage.setItem("matlogado", "");
                sessionStorage.setItem("nomelogado","");
                sessionStorage.setItem("acessologado", "");
                
                this.callback_nok();

            }


        })

    }

    static fechar=()=>{
        const fundoLogin=document.querySelector("#fundoLogin");
        fundoLogin.remove();
        const id_estiloLogin=document.querySelector("#id_estiloLogin");
        id_estiloLogin.remove();
    }

}
//export {Login};  para disponibilizar via servidor CDN deixa de ser um modulo

// var http = require('http');
// var url = require('url');
// var request = require('request');
// http.createServer(function(req,res){
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.writeHead(200,{'Content-Type':'application/json'});

//   let parametros=url.parse(req.url,true);

//   let mat=parametros.query.matricula;
//   let pas=parametros.query.senha;

//   let dados=null;

//   if(mat=='123' && pas=='321'){
//     dados = {
//       nome: 'Bruno',
//       acesso:10
//     }
//   }

//   res.end(JSON.stringify(dados));
// }).listen(8080);

// Exemplo de chamada
//https://2e790ad7-f96e-4e43-aeb8-2e58744aa4c6-00-zxiuoxj8cgrj.riker.replit.dev/?matricula=123&senha=321
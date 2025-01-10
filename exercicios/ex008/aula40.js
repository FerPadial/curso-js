//import { Login } from "./login.js";  ==> agora vem via distribuição de conteudo CDN no www;jsdelivr.com - o link do modulo login.js está no sciprt do HTML em um endpoint
import { CxTPmsg } from "./cxTPmsg.js";

const callback_ok=()=>{}

const callback_nok=()=>{
    const config={
        cor: "#800",
        tipo:"ok",
        textos:null,
        comando_sn:null,
    }
    CxTPmsg.mostrar(config,"Login - Erro:","Login não efetuado! Usuário ou senha incorretos.");
}


Login.login(callback_ok,callback_nok);


//import { Login } from "./login.js";  ==> agora vem via distribuição de conteudo CDN no www.jsdelivr.com - o link do modulo login.js está no sciprt do HTML em um endpoint
import { CxTPmsg } from "./cxTPmsg.js";

const callback_ok=()=>{}

const callback_nok=()=>{
    const config={
        cor: "#800",
        tipo:"ok",
        textos:null,
        comando_sn:()=>{},
    }
    CxTPmsg.mostrar(config,"Login - Erro:","Login não efetuado! Usuário ou senha incorretos.");
}

const configlogin={
    cor: "#048",
    img: "../imagens/olho.JPG",
    endpoint:"https://2e790ad7-f96e-4e43-aeb8-2e58744aa4c6-00-zxiuoxj8cgrj.riker.replit.dev",
}
Login.login(callback_ok,callback_nok,configlogin);


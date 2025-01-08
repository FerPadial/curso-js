import {CxTPmsg} from "./cxTPmsg.js"

const config={
    cor:"#48f",
    tipo: "ok",  //tipos: ok. sn
    textos:["SIM","NÃO"],
    comando_sn:()=>{}
}

const fsim=()=>{
    console.log("Botão SIM pressionado!")
}

const btn_mostrarcxmsg=document.querySelector('#btn_mostrarcxmsg')
const btn_mostrarcxmsg2=document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3=document.querySelector('#btn_mostrarcxmsg3')

btn_mostrarcxmsg.addEventListener("click",()=>{
    config.tipo="ok"
    CxTPmsg.mostrar(config,"CFB Cursos","Curso de JavaScript")
})

btn_mostrarcxmsg2.addEventListener("click",()=>{
    config.tipo="sn"
    config.comando_sn=()=>{fsim()}
    CxTPmsg.mostrar(config,"Youtube","Canal com Cursos de Programação")
})

btn_mostrarcxmsg3.addEventListener("click",()=>{
    config.tipo="sn"
    config.textos=["OK","CANCELA"]
    config.comando_sn=()=>{}
    CxTPmsg.mostrar(config,"JavaScript","Aula demonstrando criação de caixa de mensagem")
})
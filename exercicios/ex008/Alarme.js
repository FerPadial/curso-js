const div_data=document.getElementById("div_data")
const div_relogio=document.getElementById("div_relogio")
const btn_ativar=document.getElementById("btn_ativar")
const btn_parar=document.getElementById("btn_parar")
const tmp_alarme=document.getElementById("tmp_alarme")
const hora_alarme=document.getElementById("hora_alarme")
const timer=document.getElementById("timer")

let som_alarme=new Audio("../sons/alarme.mp3")
som_alarme.loop = -1  //-1 toca pra sempre se definir 3 por exemplo toca 3x e para

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener("click",(evt)=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme=new Date(ts_alarme)

    const dt_alarmeF = formataHr(dt_alarme.getHours(),dt_alarme.getMinutes(),dt_alarme.getSeconds())

    hora_alarme.innerHTML="Hora do Alarme: "+dt_alarmeF
})

btn_parar.addEventListener("click",(evt)=>{
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML="Hora do Alarme: "
    tmp_alarme.value=0
    timer.classList.remove("alarme")
    som_alarme.pause();
    som_alarme.currentTime = 0;
})

const data = new Date()

const formataHr=(hr, min, seg)=>{
    let fhr = hr<10?'0'+hr:hr
    let fmin = min<10?'0'+min:min
    let fseg = seg<10?'0'+seg:seg
    const fhora = fhr + ':' +fmin + ':' + fseg
    return fhora
}

const formataDt=(dia, mes, ano)=>{
    let fdia = dia<10?'0'+dia:dia
    let fmes = mes<10?'0'+mes:mes
    let fano = ano.lenght<4?'20'+ano:ano
    const fhora = fdia + '/' +fmes + '/' + fano
    return fhora
}

const Atualiz_data=()=>{
    const data_r=formataDt(data.getDate(),data.getMonth(),data.getFullYear())
    div_data.innerHTML=data_r
}

const relogio=()=>{
    const data = new Date()
   
    const hr_completa = formataHr(data.getHours(),data.getMinutes(),data.getSeconds())

    div_relogio.innerHTML=hr_completa

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo=setInterval(() => {
    relogio()
    Atualiz_data()
}, 1000);
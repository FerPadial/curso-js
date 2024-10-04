const div_data=document.getElementById("div_data")
const div_relogio=document.getElementById("div_relogio")

const data = new Date()

let dia=data.getDate()
dia=dia<10?'0'+dia:dia
let mes=data.getMonth()
mes=mes<10?'0'+mes:mes
const data_r=dia+"/"+mes+"/"+data.getFullYear()
div_data.innerHTML=data_r


const relogio=()=>{
    const data = new Date()
    let hora=data.getHours()
    hora=hora<10?'0'+hora:hora
    let minuto=data.getMinutes()
    minuto=minuto<10?'0'+minuto:minuto
    let segundo=data.getSeconds()
    segundo=segundo<10?'0'+segundo:segundo

    const hr_completa = hora+":"+minuto+":"+segundo

    div_relogio.innerHTML=hr_completa
}

const intervalo=setInterval(() => {
    relogio()
}, 1000);





// const div_data=document.getElementById("div_data")
// const data=new Date()

// // console.log(data)
// // console.log(Date.now())  //retorna o timestamp
// // console.log(data.getDate())
// // console.log(data.getDay())
// // console.log(data.toDateString())

// //getDate() = dia do mês
// //getDay() = dia da semana (número)
// //getFullYear() = Ano 4 digitos
// //getHours() = Horas
// //getMilliseconds() = milisegundos
// //getMinutes() = minutos
// //getMonth() = mês
// //getSeconds() = segundos
// //getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UC)
// //Date.now() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UC)
// //getTimezoneOffset() = Timezone de localidade
// //setDate() = Define um dia do mês para a data
// //setMonth() = Defio um mês para a data
// //setFullYear() = Define um ano para a data
// //setHours() = Define horas
// //setMinutes = define minutos
// //setSeconds = define segundos
// //setMilliseconds = define milisegundos
// //toDateString() = Retorna somente a data


// console.log(new Date().getMonth())

// const dia_m=data.getDate()<10?'0'+data.getDate():data.getDate()
// const mes=data.getMonth()<10?'0'+data.getMonth():data.getMonth()
// const data_r=dia_m+"/"+mes+"/"+data.getFullYear()
// div_data.innerHTML=data_r

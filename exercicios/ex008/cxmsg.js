class Cxmsg{
    titulo=null
    texto=null
    cor=null
    destino=null
    divmsg=null
    constructor(config){
        this.titulo=config.titulo
        this.texto=config.texto
        this.cor=config.cor
        this.destino=document.body
    }

    mostrar=()=>{
        // console.log("mostra caixa de msg! " + this.texto)
        this.divmsg=document.createElement("div")
        const estilo_divmsg=
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgb(0,0,0,0.7);"

        this.divmsg.setAttribute("id","divmsg")
        this.divmsg.setAttribute("style",estilo_divmsg)
        this.destino.prepend(this.divmsg)

        
        const estilo_areaCxmsg=
            "display: flex;"+
            "justify-content: flex_start;"+
            "align-items: flex_start;"+
            "flex-direction: column;"+
            "width: 300px;"
        const areaCxmsg=document.createElement("div")
        areaCxmsg.setAttribute("style","estilo_areaCxmsg")
        this.divmsg.appendChild(areaCxmsg)

        const estilo_tituloCxmsg=
            "display: flex;"+
            "justify-content: flex_start;"+
            "align-items: center;"+
            "width: 100%;"+
            "color: #fff;"+
            "background-color: "+ this.cor + ";"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"
        const tituloCxmsg=document.createElement("div")
        tituloCxmsg.setAttribute("style","estilo_tituloCxmsg")
        tituloCxmsg.innerHTML=this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

    }

    ocultar=()=>{

    }
}
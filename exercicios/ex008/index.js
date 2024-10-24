// const Express = require('express')
// const app = Express()
// const port = 3000

// app.get('/', (req , res)=>{
//     res.send("<h1> Olá, Mundo!</h1>")
// })

// app.listen(port, ()=>{console.log("Servidor Online!")})

var http = require('http');
http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type':'application/json'});

    let oee = {
        disponibilidade: Math.round(Math.random() * 100),
        qualidade: Math.round(Math.random() * 100),
        performance: Math.round(Math.random() * 100)
    }

    res.end(JSON.stringify(oee));
}).listen(8080, ()=>{console.log("Servidor Online!")});
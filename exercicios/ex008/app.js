const Express = require('express')
const app = Express()
const port = 3000

app.get('/', (req , res)=>{
    res.send("<h1> Olá, Mundo!</h1>")
})

app.listen(port, ()=>{console.log("Servidor Online!")})

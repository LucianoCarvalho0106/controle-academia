const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.send("Hello word")
})

app.listen(5000,()=>console.log("Servidor rodando na porta 5000"))
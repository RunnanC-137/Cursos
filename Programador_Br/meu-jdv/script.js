const express = require("express")
const path = require("path")

const app = express()
const PORT = 5000

app.use(express.static(path.join(__dirname, "client")))


app.listen(PORT, (error) => {
    console.log(`server rodando na porta ${PORT}`)
    if(error){
        console.log(error)
    }

})
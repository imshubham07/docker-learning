const  express= require("express")

const app = express()

app.get('/', (req, res)=>{
    res.send("Hwllo World From Docker server hellos")
})

app.listen(3000)

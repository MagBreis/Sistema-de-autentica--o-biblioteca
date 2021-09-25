var express = require("express")
var mongoose = require("mongoose");
const router = require("./routers/alunos-router")
const app = express()
const PORT = 3000;

mongoose.connect("mongodb+srv://magbreis:magbreis@cluster0.ngrjj.mongodb.net/escola?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology:true})

app.set("view engine", "ejs")
app.set("views", __dirname + "\\views");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use("/",router)
// para arquivos externos

//  app.get("/", (req, res) => {
//     res.send("Página Inicial")
//  })
//rotas


app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT)
})
var express = require("express")
var mongoose = require("mongoose");

const app = express()
const port = 7000;

mongoose.connect("mongodb+srv://magbreis:magbreis@cluster0.ngrjj.mongodb.net/biblioteca?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology:true});


app.set("view engine", "ejs")
app.set("views", __dirname, "/views");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"));

const livrosRouter = require("./routers/livros-router")
app.use("/",livrosRouter)

app.listen(port, () => {
    console.log("Servidor rodando na porta "+ port)
}) 

const mongoose = require("mongoose")

const Livros = mongoose.model("livros",{
    titulo: String,
    autor: String,
    genero: String,
    isbn: Number
   
})
module.exports = Livros
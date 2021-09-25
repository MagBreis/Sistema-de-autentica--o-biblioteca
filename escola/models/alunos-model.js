var mongoose = require("mongoose")

const Alunos = mongoose.model("alunos",{
    nome: String,
    matricula: Number,
    turma: String,
    email: String,
});

module.exports = Alunos;
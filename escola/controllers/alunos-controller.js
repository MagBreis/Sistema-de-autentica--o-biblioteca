const Alunos = require("../models/alunos-model")

// funcionalidade da rota lista_aluno

exports.listar_alunos = (req, res) => {
   let alunos = Alunos.find({}, (err, aluno) => {
        if (err)
            return res.status(500).send("erro ao consultar")
        res.render("pages/alunos", { resultado: aluno }) // define a listagem
    })
}

exports.cadastrar_aluno_get = (req, res) => { //exibir o formulario
    res.render("pages/formAlunos")
}
exports.cadastrar_aluno_post = (req, res) => {  // salva no bd
    let salvar_aluno = new Alunos();

    salvar_aluno.nome = req.body.nome
    salvar_aluno.matricula = req.body.matricula
    salvar_aluno.turma = req.body.turma
    salvar_aluno.email = req.body.email

    salvar_aluno.save((err) => {
        if (err)
            return res.status(500).send("Erro ao cadastrar")
        return res.redirect("/alunos")
    })

}
exports.deletar_aluno = (req, res) => {
    var id = req.params.id;
    Alunos.deleteOne({ _id:id }, (err,result) => {
        if (err)
            return res.status(500).send("Erro ao apagar")
        res.redirect("/alunos")
    })
}

exports.editar_aluno_get = (req, res) => {
    var id = req.params.id;
    Alunos.findById(id, (err, alunos) => {
        if (err)
            return res.status(500).send("Erro ao editar");
        res.render("pages/formEditarAlunos", { resultado:alunos });
    });
};

exports.editar_aluno_post = (req, res) => {
    var id = req.body.id;
    Alunos.findById(id, (err, aluno) => {
        if (err)
            return res.status(500).send("Erro ao editar");
        aluno.nome = req.body.nome
        aluno.matricula = req.body.matricula
        aluno.turma = req.body.turma
        aluno.email = req.body.email

        aluno.save((err) => {
            if (err)
                return res.status(500).send("Erro ao cadastrar");
            res.redirect("/alunos");
        })
    })
}

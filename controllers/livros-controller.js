const livros_bd = require("../models/livros-model")

exports.pagina_principal = (req, res) => {
    res.render("views/pages/home")
}
       

exports.listar_livros = (req,res)=>{
    livros_bd.find({},(err,item)=>{
        if(err)
            return res.status(500).send("Erro ao listar");
        res.render("views/pages/listarLivros",{lista_livros:item})
    })
}

exports.cadastrar_livros_get = (req,res)=>{
    res.render("views/pages/cadastrarLivros")
}

exports.cadastrar_livros_post = (req,res)=>{
    let cadastrar_livros = new livros_bd ()
    cadastrar_livros.Autor = req.body.titulo 
    cadastrar_livros.Genero = req.body.genero 
    cadastrar_livros.ISBN = req.body.isbn

    cadastrar_livros.save(err =>{
        if(err)
        return res.status(500).send("erro")
        res.redirect("/listandoLivros")
    })
}


exports.deletar_livros = (req,res)=>{
    var id = req.params.id
    livros_bd.deleteOne({_id:id},(err)=>{
        if(err)
        return res.status(500).send("erro ao deletar");
        res.redirect("/listandoLivros")
    })
}

exports.editar_livros_get = (req, res) => {
    var id = req.params.id;
    livros_bd.findById(id, (err, item) => {
        if (err)
            return res.status(500).send("Erro ao editar");
        res.render("/listandoLivros", { resultado:item });
    });
};

exports.editar_livros_post = (req, res) => {
    var id = req.body.id;
    Livros.findById(id, (err, item) => {
        if (err)
            return res.status(500).send("Erro ao editar");
            editar_livros.Autor = req.body.titulo 
            editar_livros.Genero = req.body.genero 
            editar_livros.isbn = req.body.isbn
        
        Livros.save((err) => {
            if (err)
                return res.status(500).send("Erro ao cadastrar");
            res.redirect("/listandoLivros");
        })
    })
}
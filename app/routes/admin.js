module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res) {
        res.render("admin/form_add_noticia") 
    })

    application.post('/noticias/salvar', function(req, res) {
        var noticia = req.body
        //recuperar conexao
        var connection = application.config.dbConnection()
        //recuperar a model
        var noticiasModel = application.app.models.noticiaModel
        //salvarNoticia
        noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
            if(error)
                res.send(error)
            else {
                //res.render("noticias/noticia", {noticia : result})
                res.redirect('/noticias')
            }
        })


    })
}


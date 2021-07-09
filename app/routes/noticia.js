module.exports = (app) => {

    app.get('/noticia', (req, res) => {

        var connection = app.config.dbConnection()
        var noticiasModel = app.app.models.noticiaModel
        noticiasModel.getNoticia(connection, (error, result) => {
            if(error)
                res.send(error)
            else
                res.render("noticias/noticia", {noticia : result})
        })

    })
    
}
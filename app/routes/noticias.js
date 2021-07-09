module.exports = (app) => {

    app.get('/noticias', (req, res) => {

        var connection = app.config.dbConnection()
        var noticiasModel = app.app.models.noticiaModel
        noticiasModel.getNoticias(connection, (error, result) => {
            if(error)
                res.send(error)
            else
                res.render("noticias/noticias", {noticias : result})
        })

    })
    
}


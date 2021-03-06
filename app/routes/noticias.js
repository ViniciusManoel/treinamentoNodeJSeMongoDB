module.exports = (application) => {

    application.get('/noticias', (req, res) => {

        var connection = application.config.dbConnection()
        var noticiasModel = new application.app.models.NoticiasDAO(connection)
        noticiasModel.getNoticias((error, result) => {
            if(error)
                res.send(error)
            else
                res.render("noticias/noticias", {noticias : result})
        })

    })
    
}


//Aula 1 - Respondendo requisições HTTP com nodejs
    var http = require('http')

    var server = http.createServer(function(req, resp){
    //Aula 2 - Respondendo requisiões HTTP com base na url
        var categoria = req.url
        if(categoria == '/tecnologia') {
            resp.end("<html><body><h1>Notícias sobre tecnologia</h1></body></html>")
        } else if(categoria == '/moda') {
            resp.end("<html><body><h1>Notícias sobre moda</h1></body></html>")
        } else if(categoria == '/beleza') {
            resp.end("<html><body><h1>Notícias sobre beleza</h1></body></html>")
        } else
            resp.end("<html><body><h1>Portal de notícias</h1></body></html>")
    })

    server.listen(3000)
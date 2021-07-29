var express = require('express') //recupera a biblioteca do express
var consign = require('consign')
var bodyParser = require('body-parser')
const {body, validationResult} = require('express-validator')
//const { check } = require('express-validator/src/middlewares/check')
//var expressValidator = require('express-validator')

var app = express() //executa a função que o módulo do express retorna
app.set('view engine', 'ejs') 
app.set('views','./app/views')

app.use(bodyParser.urlencoded({extended:true}))
//app.use(expressValidator())
app.post("/noticias/salvar",[
    body('titulo').notEmpty().withMessage('O título é obrigatório'),
    body('resumo').notEmpty().withMessage('O resumo é obrigatório'),
    body('resumo').isLength({min: 10, max: 100}).withMessage('O resumo deve conter entre 10 e 100 caracteres'),
    body('data_noticia').notEmpty().isDate({format: 'YYYY-MM-DD'}).withMessage('A data é obrigatória'),
    body('noticia').notEmpty().withMessage('A notícia é obrigatória')
], (req, res) => {

    let noticia = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        //res.render('./app/views/admin/form_add_noticia')
        return res.status(400).json({errors: errors.array()})
    }
    
    //adicionar os dados no BD:
    let conn = app.config.dbConnection(); 
    let noticiasModel = new app.app.models.NoticiasDAO(conn); 
    noticiasModel.salvarNoticia(noticia,(error, result) => {
        res.redirect('/noticias');
    });

})

consign()
    .include('app/routes')
    .then('config/dbConnection.js') //para não dar loop no arquivo server.js é preciso indicar exatamente o arquivo e sua extensão
    .then('app/models')
    .into(app)
module.exports = app
var express = require('express') //recupera a biblioteca do express
var consign = require('consign')
var bodyParser = require('body-parser')

var app = express() //executa a função que o módulo do express retorna
app.set('view engine', 'ejs') 
app.set('views','./app/views')

app.use(bodyParser.urlencoded({extended:true}))

consign()
    .include('app/routes')
    .then('config/dbConnection.js') //para não dar loop no arquivo server.js é preciso indicar exatamente o arquivo e sua extensão
    .then('app/models')
    .into(app)
module.exports = app
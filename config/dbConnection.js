var mysql = require('mysql')

var connMySQL = () => {
    console.log('conexao com BD estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '920906',
        database: 'portal_noticias'
    })
}

module.exports = () => {
    console.log('o autoload carregou o modulo de conexao com o BD')
    return connMySQL
}
    
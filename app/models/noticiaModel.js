module.exports = () => {
    this.getNoticias = (connection, callback) => {
        connection.query('select * from noticias', callback)
    }

    this.getNoticia = (connection, callback) => {
        connection.query('select * from noticias where id_noticias = 2', callback)
    }

    return this
}
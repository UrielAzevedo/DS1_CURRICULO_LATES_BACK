const pool = require('../../db')
const queries = require('./queries')


const error = (err) => {

    return({
        error: err
    })
}

const getObras = (req, res) => {
    pool.query(queries.getObras, (err, resSql) => {
        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send(resSql.rows)
    })
}

const getObrasTitulo = (req, res) => {
    pool.query(queries.getObrasTitulo(req.query.titulo), (err, resSql) => {
        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send(resSql.rows)
    })
}

const insertObras = (req, res) => {

    pool.query(queries.insertObras(req.query.titulo, req.query.ano, req.query.tipo), (err, resSql) => {
        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send()
    })
}

const deleteObras = (req, res) => {

    pool.query(queries.deleteObras(req.query.titulo), (err, resSql) => {

        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send()
    })
}

const obrasPorAno = (req, res) => {

    pool.query(queries.deleteObras(req.query.titulo), (err, resSql) => {

        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send()
    })
}


module.exports = {
    getObras,
    insertObras,
    getObrasTitulo,
    deleteObras,
}
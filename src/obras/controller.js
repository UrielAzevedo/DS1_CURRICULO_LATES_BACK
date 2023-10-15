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
        res.status(200).send()
    })
}

const insertObras = (req, res) => {

    pool.query(queries.insertObras(req.query.titulo, req.query.ano, req.query.status), (err, resSql) => {

        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send()

    })
}

module.export {
    getObras,
    insertObras,
}
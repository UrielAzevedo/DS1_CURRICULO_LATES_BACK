const pool = require('../../db')
const queries = require('./queries')

const error = (err) => {

    return({
        error: err
    })
}

const getPesquisadores = (req, res) => {
    pool.query(queries.getPesquisadores, (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    }) 
}

const getPesquisadoresNome = (req, res) => {
    pool.query(queries.getPesquisadoresNome(req.query.nome), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

const getPesquisadoresEmail = (req, res) => {
    pool.query(queries.getPesquisadoresEmail(req.query.email), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

// const getPesquisadoresInstituto = (req, res) => {
//     pool.query(queries.getPesquisadoresInstituto(req.query.instituto), (err, resSql) => {
//         if(err) res.send (error(err))
//         res.status(200).json(resSql.rows)
//     })
// }

const getPesquisadoresTodos = (req, res) => {
    pool.query(queries.getPesquisadoresTodos(req.query.word), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

module.exports = {
    getPesquisadores,
    getPesquisadoresNome,
    getPesquisadoresEmail,
    getPesquisadoresTodos
}
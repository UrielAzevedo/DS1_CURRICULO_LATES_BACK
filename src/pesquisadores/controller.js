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

const getPesquisadoresId = (req, res) => {
    pool.query(queries.getPesquisadoresId(req.query.id), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

const postPesquisador = (req, res) => {
    pool.query(queries.postPesquisador(req.query.idXml, req.query.nome, req.query.idInstituto), (err, resSql) => {
        if(err) res.send(error(err))
        res.status(200).send()
    })
}

const deletePesquisador = (req, res) => {
    pool.query(queries.deletePesquisador(req.query.idXml), (err, resSql) => {
        if(err) res.send(error(err))
        res.status(200).send()
    })
}

const getPesquisadoresInstituto = (req, res) => {
    pool.query(queries.getPesquisadoresInstituto(req.query.instituto), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

const getPesquisadoresTodos = (req, res) => {
    pool.query(queries.getPesquisadoresTodos(req.query.word), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

const updatePesquisador = (req, res) => {
    pool.query(queries.updatePesquisador( req.query.nome, req.query.email, req.query.instituto), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).send()
    })
}

module.exports = {
    getPesquisadores,
    getPesquisadoresNome,
    getPesquisadoresEmail,
    getPesquisadoresTodos,
    getPesquisadoresId,
    getPesquisadoresInstituto,
    postPesquisador,
    deletePesquisador,
    updatePesquisador,
}
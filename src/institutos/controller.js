const pool = require('../../db')
const queries = require('./queries')

const error = (err) => {

    return({
        error: err
    })
}

const getInstitutos = (req, res) => {
    pool.query(queries.getInstitutos, (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    }) 
}

const getInstitutoNome = (req, res) => {
    pool.query(queries.getInstitutosNome(req.query.nome), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

const getInstitutoAcronimo = (req, res) => {
    pool.query(queries.getInstitutosAcronimo(req.query.acronimo), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

const getInstitutoTodos = (req, res) => {
    pool.query(queries.getInstitutoTodos(req.query.word), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).json(resSql.rows)
    })
}

const getInstitutosOffSet = (req, res) => {
    pool.query(queries.getInstitutosOffSet(req.query.offSet), (err, resSql) => {

        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).json(resSql.rows)
    })
}

const updateInstituto = (req, res) => {
    pool.query(queries.editInstituto(req.query.nome, req.query.newNome, req.query.acronimo), (err, resSql) => {

        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send()
    })
}

const deleteInstituto = (req, res) => {
    pool.query(queries.deleteInstituto(req.query.nome), (err, resSql) => {

        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send()
    })
}

const postInstituto = (req, res) => {
    pool.query(queries.postInstituto(req.query.nome, req.query.acronimo), (err, resSql) => {

        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send()
    })
}

module.exports = {
    getInstitutos, getInstitutoNome, getInstitutoAcronimo, getInstitutoTodos, getInstitutosOffSet, updateInstituto, deleteInstituto, postInstituto
}
const obras = require('./obras.json')
const pesquisadores = require('./pesquisadores.json')

const express = require('express')
const institutoRoutes = require('./src/institutos/routes')
var cors = require('cors');

const pool = require('./db')
// const queries = require('./queries')

const error = (err) => {

    return({
        error: err
    })
}

const app = express()
const port = 8080

app.use(express.json())
app.use(cors());

console.log(pesquisadores[0])

// pesquisadores.forEach((pesquisador) => {

// pool.query(`INSERT INTO pesquisador(nome,idXml) VALUES('${pesquisador.nome}','${pesquisador.idXml}') ${pesquisador.nome}`, (err, resSql) => {

//     // if(err) res.send(JSON.stringify(error(err)))
//     // res.status(200).send()
// })

// })

// pool.query('INSERT INTO instituto', (err, resSql) => {

//     if(err) res.send(JSON.stringify(error(err)))
//     res.status(200).send()
// })

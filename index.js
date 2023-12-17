const express = require('express')
const institutoRoutes = require('./src/institutos/routes')
const pesquisadorRoutes = require('./src/pesquisadores/routes')
const obraRoutes = require('./src/obras/routes')
const coAutorRoutes = require('./src/coAutores/routes')
const grafo = require('./src/grafo/routes')

var cors = require('cors');

const app = express()
const port = 8080

app.use(express.json())
app.use(cors());

app.get("/", (req,res) => {
    res.send("Api DS1")
})

app.use('/api/v1/institutos', institutoRoutes)
app.use('/api/v1/pesquisadores', pesquisadorRoutes)
app.use('/api/v1/obras', obraRoutes)
app.use('/api/v1/coAutores', coAutorRoutes)
app.use('/api/v1/grafo', grafo)

app.listen(port, () => console.log(`running on port ${port}`))
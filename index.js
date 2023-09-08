const express = require('express')
const institutoRoutes = require('./src/institutos/routes')
var cors = require('cors');

const app = express()
const port = 8080

app.use(express.json())
app.use(cors());

app.get("/", (req,res) => {
    res.send("Api DS1")
})

app.use('/api/v1/institutos', institutoRoutes)

app.listen(port, () => console.log(`running on port ${port}`))
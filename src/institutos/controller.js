const pool = require('../../db')

const getInstitutos = (req, res) => {
    pool.query("SELECT * FROM instituto", (err, resSql) => {
        // if(err) throw err
        // res.status(200).json(res.rows)
        res.send(resSql.rows)
    }) 
}

module.exports = {
    getInstitutos,
}
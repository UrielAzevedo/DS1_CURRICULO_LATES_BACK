// const{Client} = require('pg')

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "rootUser",
//     database: "DS1"
// })

// client.connect()

// client.query(`SELECT * FROM instituto;`, (err,res) => {

//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(res.rows)
//     }

//     // console.log(res)
//     client.end
// })

const Pool = require('pg').Pool

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "rootUser",
    database: "DS1"
})

module.exports = pool
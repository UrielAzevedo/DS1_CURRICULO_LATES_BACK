const pool = require('../../db')
const queries = require('./queries')
const pesquisadorObras = require('../../pesquisador_obras.json')

const error = (err) => {

    return({
        error: err
    })
}

const getPesquisadoresRelacionados = async (req, res) => {

    var idXmlAutoresRelacionados = []

    const resSql = await pool.query(queries.getCoAutoresUnicos(req.query.nomePesquisador, req.query.idXmlPesquisador))

    resSql.rows.forEach((coAutor) => {
        idXmlAutoresRelacionados.push(coAutor.idxmlpesquisador)
    })

    res.status(200).send(idXmlAutoresRelacionados)

}

// getInstitutosRelacionados = async (req, res) => {


//     var institutosRelacionados = []

//     const resSql = await pool.query(queries.getPesquisadoresInstituto(req.query.idInstituto))
//     resSql.rows.forEach( async (pesquisador) => {

//         const resSqlCoAutores = await pool.query(queries.getCoAutoresUnicos(pesquisador.nome, pesquisador.idXml))

//         resSqlCoAutores.rows.forEach( async (coAutor) => {

//             const pesquisador = await pool.query(queries.getPesquisadoresId(coAutor.idxmlpesquisador))
//             if(pesquisador.rows[0].idinstituto != req.query.idInstituto){
//                 console.log(pesquisador.rows[0].idinstituto)
//                 institutosRelacionados.push(pesquisador.rows[0].idinstituto)
//             }

//         })

//     })

//     res.status(200).send(institutosRelacionados) 

// }

getInstitutosRelacionados = async (req, res) => {
    
    try {
        var institutosRelacionados = [];

        const resSql = await pool.query(queries.getPesquisadoresInstituto(req.query.idInstituto));

        const promises = resSql.rows.map(async (pesquisador) => {
            const resSqlCoAutores = await pool.query(queries.getCoAutoresUnicos(pesquisador.nome, pesquisador.idXml));

            const innerPromises = resSqlCoAutores.rows.map(async (coAutor) => {
                const pesquisador = await pool.query(queries.getPesquisadoresId(coAutor.idxmlpesquisador));
                if (pesquisador.rows[0].idinstituto != req.query.idInstituto) {
                    console.log(pesquisador.rows[0].idinstituto);
                    institutosRelacionados.push(pesquisador.rows[0].idinstituto);
                }
            });

            await Promise.all(innerPromises);
        });

        await Promise.all(promises);

        res.status(200).send(institutosRelacionados);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getPesquisadoresRelacionados,
    getInstitutosRelacionados,
}
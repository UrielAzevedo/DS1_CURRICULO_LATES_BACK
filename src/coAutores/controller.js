const pool = require('../../db')
const queries = require('./queries')

const error = (err) => {

    return({
        error: err
    })
}

const getAll = (req, res) => {
    pool.query(queries.getAll, (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).send(resSql.rows)
    }) 
}

const getDetalhamento = (req, res) => {

    const detalhamentoProducoes = []

    pool.query(queries.getIdXml(req.query.pesquisador), (err, resSql) => {
        if(err) res.send (error(err))

        const result = resSql.rows.reduce((acc, obj) => {
            const key = obj.tituloproducao;
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
          }, {});
          
        var subarrays = Object.values(result);

        subarrays.forEach((artigo, index) => {

            var detalhamento = ''
            var tipoObra = ''

            artigo.forEach((obra, index) => {
                tipoObra = obra.tipoproducao
                // console.log(obra)

                // && (obra.ano >= req.query.anoInicio && obra.ano <= req.query.anoFim)
                console.log(obra.tipoproducao )
                if((obra.tipoproducao === req.query.tipo || req.query.tipo === 'todos') && (obra.ano >= req.query.anoInicio && obra.ano <= req.query.anoFim)){
                    console.log('here')
                    detalhamento = detalhamento.concat(`${obra.nomecoautor}; `)
                    if (artigo.indexOf(obra) === artigo.length - 1) detalhamento = detalhamento.concat(`${obra.tituloproducao}, ${obra.ano}; `)
                }

            })

            // if(detalhamento !== '') detalhamentoProducoes.push(detalhamento)
            if(detalhamento !== '') detalhamentoProducoes.push({detalhamento: detalhamento, tipo: tipoObra})
        })
        
        console.log(detalhamentoProducoes)
        res.status(200).send(detalhamentoProducoes)

    }) 
}

const post = (req, res) => {
    pool.query(queries.post(req.query.tituloProducao, req.query.tipoProducao, req.query.idXmlPesquisador, req.query.coAutor, req.query.ano), (err, resSql) => {
        if(err) res.send (error(err))
        res.status(200).send()
    }) 
}

const deleteIdXml = (req, res) => {

    pool.query(queries.deleteIdXml(req.query.idXml), (err, resSql) => {

        if(err) res.send(JSON.stringify(error(err)))
        res.status(200).send()
    })
}

module.exports = {
    getAll,
    post,
    deleteIdXml,
    getDetalhamento,
}
const getPesquisadoresRelacionados = (nomePesquisador) => {
    return(
        `select * from co_autores where nomecoautor='${nomePesquisador}'`
    )
}

const getCoAutoresUnicos = (nomePesquisador, idXmlPesquisador) => {
    return(
        `select * from co_autores where nomecoautor='${nomePesquisador}' and idxmlpesquisador!='${idXmlPesquisador}'`
    )
}

const getPesquisadoresInstituto = (instituto) => {
    return(
        `SELECT * FROM pesquisador WHERE idinstituto='${instituto}'`
    )
}

const getPesquisadores = "SELECT * FROM pesquisador"

// const getPesquisadorObra = (nomeObra) => {
//     return(
//         ``
//     )
// }

const getCoAUtoresObra = (nomeObra) => {
    return(
        `SELECT * FROM co_autores WHERE tituloproducao='${nomeObra}'`
    )
}

const getPesquisadoresId = (id) => {

    return(
        `SELECT * FROM pesquisador WHERE idxml='${id}'`
    )

}


module.exports = {
    getPesquisadoresRelacionados,
    getCoAutoresUnicos,
    getCoAUtoresObra,
    getPesquisadores,
    getPesquisadoresInstituto,
    getPesquisadoresId,
}
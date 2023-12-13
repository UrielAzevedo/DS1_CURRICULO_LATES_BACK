const getAll = "SELECT * FROM co_autores"

const getIdXml = (IdXml) => {
    return(
        `SELECT * FROM co_autores WHERE idxmlpesquisador='${IdXml}'`
    )
}

const post = (tituloProducao, tipoProducao, idXmlPesquisador, nomeCoAutor, ano) => {
    return(
        `INSERT INTO co_autores(tituloproducao,tipoproducao,idxmlpesquisador,nomecoautor,ano) VALUES('${tituloProducao}','${tipoProducao}','${idXmlPesquisador}','${nomeCoAutor}','${ano}')`
    )
}

const deleteIdXml = (idXml) => {
    return(
        `DELETE FROM co_autores WHERE idxmlpesquisador='${idXml}'`
    )
}

module.exports = {
    getAll,
    post,
    deleteIdXml,
    getIdXml,
}
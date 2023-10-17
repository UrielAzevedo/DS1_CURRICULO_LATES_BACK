
const getObras = `SELECT * FROM producao`
 
const insertObras = (titulo, ano, status) => {
    return(
        `INSERT INTO producao(titulo, ano, tipo) VALUES('${titulo}', '${ano}', '${status}')` 
    )
}

const deleteObras = (titulo) => {
    return(
        `DELETE FROM producao WHERE titulo='${titulo}'`
    )
}

const getObrasTitulo = (titulo) => {
    return(
        `SELECT * FROM producao WHERE titulo='${titulo}'`
    )
}

module.exports = {
    getObras,
    insertObras,
    deleteObras,
    getObrasTitulo,
}
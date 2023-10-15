
const getObras = () => {
    return(
        `SELECT * FROM producao`
    )
}

const insertObras = (titulo, ano, status) => {
    return(
        `INSERT INTO producao(titulo, ano, tipo) VALUES('${titulo}', '${ano}', '${status}')` 
    )
}

module.exports = {
    getObras,
    insertObras,
}
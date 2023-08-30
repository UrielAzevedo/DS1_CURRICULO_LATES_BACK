const getInstitutos =  "SELECT * FROM instituto"

const getInstitutosNome = (nome) => {
    return(
        `SELECT * FROM instituto WHERE nome = '${nome}'`
    )
}

const getInstitutosAcronimo = (acronimo) => {
    return(
        `SELECT * FROM instituto WHERE acronimo = '${acronimo}'`
    )
}

const getInstitutosOffSet = (offSet) => {return(
    `SELECT * FROM instituto OFFSET ${offSet} LIMIT 6;`
)}

const editInstituto = (nome, newName, acronimo) => {
    return(
        `UPDATE instituto SET nome='${newName}', acronimo='${acronimo}' WHERE nome='${nome}'`
    )
}

const deleteInstituto = (nome) => {
    return(
        `DELETE FROM instituto WHERE nome='${nome}'`
    )
}

const postInstituto = (nome, acronimo) => {
    return(
        `INSERT INTO instituto(nome,acronimo) VALUES('${nome}', '${acronimo}')`
    )
}

module.exports = {
    getInstitutos,
    getInstitutosNome,
    getInstitutosAcronimo,
    getInstitutosOffSet,
    editInstituto,
    deleteInstituto,
    postInstituto
}
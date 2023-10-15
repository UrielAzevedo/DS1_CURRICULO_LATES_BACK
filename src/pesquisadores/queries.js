// const getPesquisadores = () => {
//     return (
//         "SELECT * FROM pesquisador"
//     )
// }

const getPesquisadores = "SELECT * FROM pesquisador"

const getPesquisadoresTodos = (word) => {

    return(
        `SELECT * FROM instituto WHERE nome ILIKE '%${word}%' OR email ILIKE '%${word}%'`
    )

}

const getPesquisadoresNome = (nome) => {
    return(
        `SELECT * FROM instituto WHERE nome ILIKE '%${nome}%'`
    )
}

const getPesquisadoresEmail = (email) => {
    return(
        `SELECT * FROM instituto WHERE email ILIKE '%${nome}%'`
    )
}

const getPesquisadoresId = (id) => {

    return(
        `SELECT * FROM pesquisador WHERE idxml='${id}'`
    )

}

const postPesquisador = (newEmail, newNome, newInstituto, nome) => {
    return(
        `UPDATE pesquisador SET email='${newEmail}', nome='${newNome}', nomeinstituto='${newInstituto}' WHERE nome='${nome}'`
    )
}

// const getInstitutosInstituto = (nome) => {
//     return(
//         `SELECT * FROM instituto WHERE nome ILIKE '%${nome}%'`
//     )
// }
    
module.exports = {
    getPesquisadores,
    getPesquisadoresTodos,
    getPesquisadoresNome,
    getPesquisadoresEmail,
    getPesquisadoresId,
    // getInstitutosEmail
}
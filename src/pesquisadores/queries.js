// const getPesquisadores = () => {
//     return (
//         "SELECT * FROM pesquisador"
//     )
// }

const getPesquisadores = "SELECT * FROM pesquisador"

const getPesquisadoresTodos = (word) => {

    return(
        `SELECT * FROM pesquisador WHERE nome ILIKE '%${word}%' OR email ILIKE '%${word}%'`
    )

}

const getPesquisadoresNome = (nome) => {
    return(
        `SELECT * FROM pesquisador WHERE nome ILIKE '%${nome}%'`
    )
}

const getPesquisadoresEmail = (email) => {
    const query = email == '' ? `SELECT * FROM pesquisador WHERE email ILIKE '%${email}%' OR email IS NULL` : `SELECT * FROM pesquisador WHERE email ILIKE '%${email}%'`
    console.log(query)
    return(query)

    // if(email == '') {
    //     return (`SELECT * FROM pesquisador WHERE email ILIKE '%${email}% OR email IS NULL`)
    // }else{
    //     return (`SELECT * FROM pesquisador WHERE email ILIKE '%${email}%`)
    // }

    // return (query)
}

const getPesquisadoresInstituto = (instituto) => {
    return(
        `SELECT * FROM pesquisador WHERE idinstituto='${instituto}'`
        // `SELECT * FROM pesquisador WHERE idinstituto='13'`
    )
}
 
const getPesquisadoresId = (id) => {

    return(
        `SELECT * FROM pesquisador WHERE idxml='${id}'`
    )

}

const postPesquisador = (idXml, nome, idInstituto) => {
    return(
        `INSERT INTO pesquisador(idxml,nome,idinstituto) VALUES('${idXml}', '${nome}', '${idInstituto}')`
    )
}

const deletePesquisador = (idXml) => {
    return(
        `DELETE FROM pesquisador WHERE idxml='${idXml}'`
    )
}
// const getInstitutosInstituto = (nome) => {
//     return(
//         `SELECT * FROM instituto WHERE nome ILIKE '%${nome}%'`
//     )
// }

const updatePesquisador = (nome, newEmail, newInstituto) => {
    return(
        `UPDATE pesquisador SET email='${newEmail}', idinstituto='${newInstituto}' WHERE nome='${nome}'`
    )
}
module.exports = {
    getPesquisadores,
    getPesquisadoresTodos,
    getPesquisadoresNome,
    getPesquisadoresEmail,
    getPesquisadoresId,
    getPesquisadoresInstituto,
    postPesquisador,
    deletePesquisador,
    updatePesquisador,
    // getInstitutosEmail
}
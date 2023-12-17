const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getPesquisadores)
router.get('/pesquisadorNome', controller.getPesquisadoresNome)
router.get('/pesquisadorEmail', controller.getPesquisadoresEmail)
router.get('/pesquisadorId', controller.getPesquisadoresId)
router.get('/pesquisadorInstituto', controller.getPesquisadoresInstituto)
router.get('/pesquisadorTodos', controller.getPesquisadoresTodos)
router.get('/pesquisadorIdTable', controller.getPesquisadoresIdTable)
router.post('/post', controller.postPesquisador)
router.put('/update', controller.updatePesquisador)
router.delete('/delete', controller.deletePesquisador)

module.exports = router
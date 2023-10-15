const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getPesquisadores)
router.get('/pesquisadorNome', controller.getPesquisadoresNome)
router.get('/pesquisadorEmail', controller.getPesquisadoresEmail)
router.get('/pesquisadoId', controller.getPesquisadoresId)
router.get('/pesquisadoTodos', controller.getPesquisadoresTodos)

module.exports = router
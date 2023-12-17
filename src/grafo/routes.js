const { Router } = require('express')
const controller = require('./controller')
const router = Router()

router.get('/pesquisadoresRelacionados', controller.getPesquisadoresRelacionados)
router.get('/institutosRelacionados', controller.getInstitutosRelacionados)

module.exports = router
const { Router } = require('express')
const controller = require('./controller')
const router = Router()

router.get('/', controller.getAll)
router.get('/detalhamento', controller.getDetalhamento)
router.post('/post', controller.post)
router.delete('/deleteIdXml', controller.deleteIdXml)

module.exports = router
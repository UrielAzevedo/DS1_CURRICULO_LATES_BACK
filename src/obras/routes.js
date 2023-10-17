const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getObras)
router.get('/obraTitulo', controller.getObrasTitulo)
router.post('/postObra', controller.insertObras)
router.delete('/deleteObra', controller.deleteObras)

module.exports = router
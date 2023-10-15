const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getObras)
router.post('postObra', controller.insertObras)

module.exports = router
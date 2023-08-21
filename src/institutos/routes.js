const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getInstitutos)

module.exports = router
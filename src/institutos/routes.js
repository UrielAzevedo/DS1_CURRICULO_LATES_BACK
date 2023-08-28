const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getInstitutos)
router.get('/offSet', controller.getInstitutosOffSet)
router.put('/update', controller.updateInstituto)
router.delete('/delete', controller.deleteInstituto)
router.post('/post', controller.postInstituto)

module.exports = router
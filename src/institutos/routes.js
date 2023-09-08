const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getInstitutos)
router.get('/offSet', controller.getInstitutosOffSet) // ofSet
router.get('/institutoNome', controller.getInstitutoNome) // nome
router.get('/institutoAcronimo', controller.getInstitutoAcronimo) // acronimo
router.get('/institutoTodos', controller.getInstitutoTodos) // word
router.put('/update', controller.updateInstituto) // newNome && nome && acronimo
router.delete('/delete', controller.deleteInstituto) // nome
router.post('/post', controller.postInstituto) // nome && acronimo

module.exports = router
const router = require('express').Router()
const articleController = require('../controllers/articleController')
const errorHandler = require('../middlewares/errorHandler')

router.get('/', articleController.showList)
router.get('/blog/:id', articleController.detailArticle)
router.post('/blog', articleController.addArticle)
router.put('/blog/:id', articleController.editArticle)
router.delete('/blog/:id', articleController.removeArticle)
router.use(errorHandler)

module.exports = router
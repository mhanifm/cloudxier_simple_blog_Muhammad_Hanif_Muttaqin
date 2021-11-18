const { Article } = require('../models')

class ArticleController {
    static async showList(req, res, next) {
        try {
            const articles = await Article.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            res.status(200).json(articles)
        } catch (err) {
            next(err)
        }
    }

    static async detailArticle(req, res, next) {
        try {
            const { id } = req.params
            const article = await Article.findByPk(id)
            if(article) {
                res.status(200).json(article)
            } else {
                throw {name: 'notFound'}
            }
        } catch (err) {
            next(err)
        }
    }

    static async addArticle(req, res, next) {
        try {
            const payload = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                image: req.body.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkP_g9g7F-6KoGTUppLMgNLPBMvW_8XWs1g_wQLrkoupPaQb5E7n6kSb0wF5zA-wsQbs&usqp=CAU'
            }
            const newArticle = await Article.create(payload)
            res.status(201).json(newArticle)
        } catch (err) {
            next(err)
        }
    }

    static async editArticle(req, res, next) {
        try {
            const { id } = req.params
            const { title, author, description, image } = req.body
            const article = await Article.findByPk(id)
            if(article) {
                const updatedArticle = await Article.update(
                    {
                        title,
                        author,
                        description,
                        image
                    },
                    { where: { id }, returning: true }
                )
                res.status(200).json(updatedArticle[1][0])
            } else {
                throw { name: 'notFound'}
            }
        } catch (err) {
            next(err)
        }
    }

    static async removeArticle(req, res, next) {
        try {
            const { id } = req.params
            const article = await Article.findByPk(id)
            if(article) {
                await Article.destroy({ where: { id } })
                res.status(200).json({ message: `Article with id ${id} has been deleted successfully` })
            } else {
                throw { name: 'notFound'}
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ArticleController
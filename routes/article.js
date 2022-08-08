const { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle } = require('../controllers/article');
const { Router } = require('express');

const router = Router();

router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;
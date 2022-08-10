const { getAll, getOne, create, update, deleteOne } = require('../controllers/reply.js');
const { Router } = require("express");

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteOne);

module.exports = router;
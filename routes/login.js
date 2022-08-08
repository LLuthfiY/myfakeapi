const { login } = require('../controllers/login.js');
const { Router } = require('express');

const router = Router();

router.post('/', login);

module.exports = router;
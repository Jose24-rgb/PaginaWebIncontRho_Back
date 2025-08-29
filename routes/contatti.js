const express = require('express');
const router = express.Router();
const { inviaContatto, listaContatti } = require('../controllers/contattiController');

router.post('/', inviaContatto);
router.get('/', listaContatti);

module.exports = router;

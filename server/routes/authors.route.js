const router = require('express').Router();

const { createNewAuthorController } = require('../controllers/authors.Controller.js');

router.post('/create', createNewAuthorController);

module.exports = router;


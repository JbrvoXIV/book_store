const router = require('express').Router();

const { getBookByBookTitleController } = require('../controllers/bookBrowsing.Controller.js');

router.get('/', getBookByBookTitleController);

module.exports = router;
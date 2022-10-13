const router = require('express').Router();

const { getBookByBookTitleController } = require('../controllers/bookBrowsing.Controller.js');

router.get('/', getBookByBookTitleController);

const { getBookByBookGenreController} = require('../controllers/bookBrowsing.Controller.js');

router.get('/genre:', getBookByBookGenreController);

const { getBookByBookRatingController } = require('../controllers/bookBrowsing.Controller.js')

router.get('/', getBookByBookRatingController)

module.exports = router;
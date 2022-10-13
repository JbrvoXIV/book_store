const router = require('express').Router();

const { getBookByBookTitleController, getBookByBookGenreController, getBookByBookRatingController } = require('../controllers/bookBrowsing.Controller.js');

router.get('/title/', getBookByBookTitleController);

router.get('/genre/', getBookByBookGenreController);

router.get('/rating/:rating', getBookByBookRatingController)

module.exports = router;
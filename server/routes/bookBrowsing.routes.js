const router = require('express').Router();

const { getBookByBookTitleController, getBookByBookGenreController, getBookByBookRatingController, getTopsellersController } = require('../controllers/bookBrowsing.Controller.js');

router.get('/title/', getBookByBookTitleController);

router.get('/genre/', getBookByBookGenreController);

router.get('/rating/:rating', getBookByBookRatingController);

router.get('/topsellers' , getTopsellersController);

module.exports = router;
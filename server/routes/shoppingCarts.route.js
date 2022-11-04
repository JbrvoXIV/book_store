const router = require('express').Router();

//const { getAllMoviesController, getMovieController, getMovieByIDController, getMovieByRatingController } = require('../controllers/shoppingCarts.Controller.js');
const {getAllShoppingCarts, createCart, addBook, deleteBook} = require('../controllers/shoppingCarts.Controller.js');

router.get('/all', getAllShoppingCarts);
router.post('/createCart', createCart);
router.patch('/addBook', addBook);
router.patch('/deleteBook', deleteBook);

module.exports = router;
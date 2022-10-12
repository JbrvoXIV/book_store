const router = require('express').Router();

//const { getAllMoviesController, getMovieController, getMovieByIDController, getMovieByRatingController } = require('../controllers/shoppingCarts.Controller.js');
const { getAllShoppingCarts, createCart} = require('../controllers/shoppingCarts.Controller.js');

router.get('/all', getAllShoppingCarts);
router.post('/createCart', createCart);


module.exports = router;
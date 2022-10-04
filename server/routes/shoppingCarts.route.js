const router = require('express').Router();

//const { getAllMoviesController, getMovieController, getMovieByIDController, getMovieByRatingController } = require('../controllers/shoppingCarts.Controller.js');
const { getAllShoppingCarts } = require('../controllers/shoppingCarts.Controller.js');

router.get('/all', getAllShoppingCarts);



module.exports = router;
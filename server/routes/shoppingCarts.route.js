const router = require('express').Router();

//const { getAllMoviesController, getMovieController, getMovieByIDController, getMovieByRatingController } = require('../controllers/shoppingCarts.Controller.js');
const { getAllShoppingCarts } = require('../controllers/shoppingCarts.Controller.js');

router.get('/all', getAllShoppingCarts);

/*
router.get('/all', getAllMoviesController);
router.get('/', getMovieController);
router.get('/:id', getMovieByIDController);
router.get('/rating/', getMovieByRatingController);
*/

module.exports = router;
const router = require('express').Router();

const { getAllMoviesController, getMovieController, getMovieByIDController, getMovieByRatingController } = require('../controllers/movies.controller.js');

router.get('/all', getAllMoviesController);
router.get('/', getMovieController);
router.get('/:id', getMovieByIDController);
router.get('/rating/', getMovieByRatingController);

module.exports = router;
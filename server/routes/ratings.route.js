const router = require('express').Router();

const {getAllBookRatings, getAllBookRatingsByTitle, createUserRating, getAverageBookRatingByTitle } = require('../controllers/ratings.Controller.js');

router.get('/', getAllBookRatings);
router.get('/search', getAllBookRatingsByTitle);
router.post('/rate', createUserRating);
router.get('/average', getAverageBookRatingByTitle);

module.exports = router;

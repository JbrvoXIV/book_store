const router = require('express').Router();

const {getAllBookRatings, getAllBookRatingsByTitle, createUserRating } = require('../controllers/ratings.Controller.js');

router.get('/', getAllBookRatings);
router.get('/search', getAllBookRatingsByTitle);
router.post('/rate', createUserRating);
router.get('/average', getAllBookRatingsByTitle);

module.exports = router;

const router = require('express').Router();

const {getAllBookRatings, getAllBookRatingsByTitle, createUserRating, createUserComment, getAverageBookRatingByTitle } = require('../controllers/ratings.Controller.js');

router.get('/', getAllBookRatings);
router.get('/search', getAllBookRatingsByTitle);
router.post('/rate', createUserRating);
router.get('/average', getAverageBookRatingByTitle);
router.post('/comment', createUserComment);

module.exports = router;

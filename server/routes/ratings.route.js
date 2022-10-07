const router = require('express').Router();

const {getAllBookRatings, getAllBookRatingsByTitle } = require('../controllers/ratings.Controller.js');

router.get('/', getAllBookRatings);
router.get('/search', getAllBookRatingsByTitle);

module.exports = router;

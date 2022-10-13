const {Book, Ratings} = require('../models/bookBrowsing.model.js');

//get book by bookTitle
const getBookByBookTitleController = async (req, res) => {
    try {
        const {bookTitle} = req.query;
        const book = await Book.find({ title: bookTitle });
        return res.status(200).json(book);
    } catch(e) {
        console.log(e);
        return res.status(404).json({ status: 'failed', message: 'title not found in database' });
    }
};

//get book by genre 
const getBookByBookGenreController = async (req, res) => {
    try {
        const {bookGenre} = req.query;
        const book = await Book.find({ genre: bookGenre });
        return res.status(200).json(book);
    } catch(e) {
        console.log(e);
        return res.status(404).json({ status: 'failed', message: 'Genre not found in database' });
    }
};

//get book by rating 
const getBookByBookRatingController = async (req, res) => {
    try {
        const {bookRating} = req.params;
        const rating = await Ratings.find({ rating: bookRating });
        return res.status(200).json(rating);
    } catch(e) {
        console.log(e);
        return res.status(404).json({ status: 'failed', message: 'Rating not found in database' });
    }
};


module.exports = { getBookByBookTitleController , getBookByBookGenreController, getBookByBookRatingController };
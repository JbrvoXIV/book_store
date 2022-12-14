const {Book} = require('../models/bookBrowsing.model.js');
const Ratings = require('../models/ratings.model.js');
const {bookStats} = require("../models/bookStats.model.js")

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
        const {rating} = req.params;
        const books = await Ratings.find({ rating: rating });
        return res.status(200).json(books);
    } catch(e) {
        console.log(e);
        return res.status(404).json({ status: 'failed', message: 'Rating not found in database' });
    }
};


// get top 10 selling books

const getTopsellersController = async (req, res) =>{
    try {
    const result = await bookStats.find ({}).sort({copies_sold: -1}).limit(10);
    return res.status(200).json(result)
    } catch(e) {
        console.log(e);
        return res.status(404).json({ status: 'failed', message: 'unable to retrieve topsellers' });
    }
};


// retrieve List of X Books at a time where X is an integer from a given position in the overall recordset. 

const getBooksByPositionController = async (req, res) =>{
    try {
            const result = await bookStats.find({ position: { $lte: req.query.position } });
        return res.status(200).send(result)
        } catch(e) {
            console.log(e);
            return res.status(404).json({ status: 'failed', message: 'unable to retrieve specified book' });
        }
};



module.exports = { getBookByBookTitleController , getBookByBookGenreController, getBookByBookRatingController, getTopsellersController, getBooksByPositionController };
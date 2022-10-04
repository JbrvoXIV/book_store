const {Book} = require('../models/bookBrowsing.model.js');

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

module.exports = { getBookByBookTitleController };
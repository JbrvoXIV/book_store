const {Book} = require('../models/bookBrowsing.model.js');

// get details by book by isbn
const getDetailsOfBookByIsbnController = async (req, res) => {
    try{
        const {isbn} = req.params;
        const bookDetailsByIsbn = await Book.find({ isbn: isbn });        
        return res.status(200).json(bookDetailsByIsbn);
    } catch(e) {
        console.log(e);
        return res.status(404).json({ sucess: false, message: 'Could not load book details information from database'});
    }  
};

// get details by book by isbn
const getDetailsOfBookByAuthorController = async (req, res) => {
    try{
        const {author} = req.query;
        const bookDetailsByAuthor = await Book.find({ author: author });        
        return res.status(200).json(bookDetailsByAuthor);
    } catch(e) {
        console.log(e);
        return res.status(404).json({ sucess: false, message: 'Could not load book details information from database'});
    }  
};

module.exports = {getDetailsOfBookByIsbnController, getDetailsOfBookByAuthorController};

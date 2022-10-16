const {Book} = require('../models/book.model.js');

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

// save a book with ISBN, BookName, BookDescription, Price, Author, Genre, Publisher, YearPublished 
const createNewBookController = async (req, res) => {
    try{
        const bookInfo = req.body;
        
        const newBook = new Book({
            isbn: bookInfo.isbn,
            title: bookInfo.title,
            description: bookInfo.description,
            price: bookInfo.price,
            author: bookInfo.author,
            genre: bookInfo.genre,
            publisher: bookInfo.publisher,
            year_published: bookInfo.year_published
        });

        await newBook.save();
        res.status(201).json({ 
            status: 201, message: "Book successfully created", user: newUser
        });
        
        return res.status(200).json(bookDetailsByAuthor);

    } catch(e) {
        res.status(401).json({ status: 401, message: e.message })
    }  
};


module.exports = { getDetailsOfBookByIsbnController, getDetailsOfBookByAuthorController, createNewBookController };

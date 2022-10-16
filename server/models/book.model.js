const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    year: String,
    copies_sold: Number,
    genre: String,
    isbn: String,
    price: Number,
    publisher: String,
    year_published: String,    
})

const Book = mongoose.model('Books', BookSchema, 'books');

module.exports = { Book }
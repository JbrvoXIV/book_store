const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    year: String,
    copies_sold: Number,
    genre: String,
    isbn: String,
    price: Number,
    publisher: String,
    year_published: String,   
    position: Number
})

const Book = mongoose.model('Books', BookSchema, 'books');

module.exports = { Book }
const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    year: String,
    genre: String,
    isbn: String,
    price: Number,
    publisher: String,
    year_published: String
})

const Book = mongoose.model('Books', BookSchema, 'books');

module.exports = { Book }
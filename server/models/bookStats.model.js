const mongoose = require('mongoose');

const BookStatsSchema = mongoose.Schema({
    title: String,
    copies_sold: Number,
    position: Number
})

const bookStats = mongoose.model('bookStats', BookStatsSchema, 'book_stats');

module.exports = { bookStats }
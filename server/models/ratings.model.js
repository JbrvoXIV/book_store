const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: String,
    rating: Number,
    comment: String,
    username: String

}, {collection: 'ratings'});

const book_ratings = mongoose.model('ratings', ratingSchema);

module.exports = book_ratings;

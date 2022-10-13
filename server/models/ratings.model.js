const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Add book title"]
    },
    author: {
        type: String,
        required: [true, "Add book author"]
    },
    year: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true
    }
}, {collection: 'ratings'});

const book_ratings = mongoose.model('ratings', ratingSchema);

module.exports = book_ratings;

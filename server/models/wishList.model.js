const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    year: String,
    copies_sold: Number,
    genre: String,
    isbn: String,
    price: Number,
    publisher: String,
    year_published: String,    
})

const wishListSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },

    name_of_list: {
        type: String,
        required: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Books'
    }]

})

const wishList = mongoose.model("WishList", wishListSchema, 'wishlist')
const Book = mongoose.model('Books', BookSchema, 'books');

module.exports = {wishList};
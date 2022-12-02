const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
    user_name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    name_of_list: {
        type: String,
        required: true,
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Books'
    }]

})

const wishList = mongoose.model("WishList", wishListSchema, 'wishlist');

module.exports = {wishList};
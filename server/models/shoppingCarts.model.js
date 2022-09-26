const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingCartSchema = new mongoose.Schema({
    shoppingCart:[{type: Schema.ObjectId, ref: 'Books'},],
    user: {
        type: Schema.ObjectId,
        ref: 'Users'
    }
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema, "shoppingcarts");

module.exports = ShoppingCart;
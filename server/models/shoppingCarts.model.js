//  Imports mongoose capabilities and assigns it to the mongoose constant
const mongoose = require('mongoose');
// Assigns the mongoose.Schema functionalities to the Schema constant
const Schema = mongoose.Schema;

// Creates a new Schema function with necessary keys and values
const shoppingCartSchema = new mongoose.Schema({ 
    shoppingCart:[
      { 
        book: { 
          type: Schema.ObjectId,
          ref: 'Books' 
        },
        quantity: { 
          type: Number, 
          default: 1 
        },
        _id: false
       }
    ],
    user: {
        type: Schema.ObjectId,
        ref: 'Users'
    }
});

// Assigns the model to a ShoppingCart constant with parameters (CollectionName ,SchemaName, referenceName)
const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema, "shoppingcarts"); //

// Exports the Schema so it can be accessed in other files such as the controller or index
module.exports = ShoppingCart;
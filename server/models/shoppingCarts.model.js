const mongoose = require('mongoose');

// MORE INFO WILL BE NEEDED TO ADD
const booksInCart = new mongoose.Schema ({
    title: {type:String},
    author: {type:String},
    year: {type:String},
});

const adressInfo = new mongoose.Schema({
    city: {type:String},
    state: {type:String},
    street: {type:String},
    zip: {type:String},
});

const userInfo = new mongoose.Schema ({
    name: {type:String},
    user_name: {type:String},
    email:{type:String},
    adress: {type:adressInfo},
});

const shoppingCartSchema = new mongoose.Schema({
    shoppingCart:[booksInCart],
    user:{
        type:userInfo
    },
});


/*
const moviesSchema = new mongoose.Schema({
    plot:{
        type:String
    } ,
    genres:[{
        type:String
    }],
    runtime:{
        type:Number
    },
    cast:[{
        type: String
    }],
    num_mflix_comments:{
        type: Number
    },
    title:{
        type: String
    },
    countries:[{
        type: String
    }],
    released:{
        type: Date
    },
    directors:[{
        type: String
    }],
    rated:{
        type: String
    },
    awards:{
        wins:{
            type: Number
        },
        nominations: {
            type: Number
        },
        text: {
            type: String
        }
    },
    lastupdated:{
        type: String
    },
    year: {
        type: Number
    },
    imdb:{
        rating: {
            type: Number
        },
        votes:{
            type: Number
        },
        id:{
            type: Number
        }
    },
    type: {
        type: String
    },
    tomatoes:{
        viewer:{
            rating: {
                type: Number
            },
            numReviews:{
                type: Number
            },
            meter:{
                type: Number
            }
        },
        lastupdated: {
            type:Date
        }
    }


});

*/

module.exports = mongoose.model('ShoppingCarts', shoppingCartSchema);
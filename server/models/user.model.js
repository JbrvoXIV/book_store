const mongoose = require('mongoose');
<<<<<<< HEAD
const BookSchema = require('./bookBrowsing.model.js');
=======
const { Book } = require("./book.model.js");
>>>>>>> f885804 (firstCommit)

const AddressSchema = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
        match: [/^[a-zA-Z]{2}$/, 'Please provide the two letter acronym for the state']
    },
    street: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true,
        min: 10000,
        max: 99999
    }
}, { _id: false })

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Full name is required'],
        lowercase: true,
        match: [/^[a-zA-Z]{3,} [a-zA-Z]{3,}$/, 'Please provide a valid name']
    },
    user_name: {
        type: String,
        trim: true,
        required: [true, 'Username is a required field']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: AddressSchema,
        required: true,
        unique: true
    },
    credit_cards: [{
        type: Number,
        min: 100000000000,
        max: 999999999999
    }]
});

const User = mongoose.model('Users', UserSchema, 'users');

module.exports = { User }
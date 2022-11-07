const mongoose = require('mongoose');
const { CreditCardSchema } = require('./creditCard.model.js');

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
        unique: true,
        required: [true, 'Username is a required field']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: AddressSchema,
        required: true
    },
    credit_cards: [ CreditCardSchema ]
});

const User = mongoose.model('Users', UserSchema, 'users');

module.exports = { User }
const mongoose = require('mongoose');

const CreditCardSchema = new mongoose.Schema({
    'card_issuer': {
        type: String,
        required: false,
        default: 'UNKNOWN BANK'
    },
    'card_number': {
        type: String,
        required: true,
        match: [[/[0-9]{16}/], 'Please input the correct card number! (16 numbers)']
    },
    'date_valid': {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    'sec_code': {
        type: Number,
        required: [true, 'Please input the security code on the back of the card!'],
        min: 000,
        max: 999
    }
});

const CreditCard = mongoose.model('CreditCard', CreditCardSchema, 'credit_cards');

module.exports = { CreditCard };
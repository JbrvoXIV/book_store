const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    biography: String,
    publisher: String        
});

const Author = mongoose.model('Authors', AuthorSchema, 'authors');

module.exports = { Author }
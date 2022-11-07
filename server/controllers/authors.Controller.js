const {Author} = require('../models/authors.model.js');

// save an author with first_name, last_name, biography and publisher
const createNewAuthorController = async (req, res) => {
    try{
        const authorInfo = req.body;
        
        const newAuthor = new Author({
            first_name: authorInfo.first_name,
            last_name: authorInfo.last_name,
            biography: authorInfo.biography,
            publisher: authorInfo.publisher
        });

        await newAuthor.save();
        return res.status(201).json({ 
            status: 201, message: "Author successfully created", author: newAuthor
        });
        
    } catch(e) {
        res.status(401).json({ status: 401, message: e.message })
    }  
};


module.exports = { createNewAuthorController };

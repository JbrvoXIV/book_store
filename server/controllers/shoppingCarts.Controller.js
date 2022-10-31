const shoppingCarts = require('../models/shoppingCarts.model.js');      
const {Book} = require('../models/bookBrowsing.model.js');
const {User} = require('../models/user.model.js');
const { Double } = require('mongodb');
const { db } = require('../models/shoppingCarts.model.js');

// get shoppingCart information
const getAllShoppingCarts = async (req, res) => {
    try{
       const carts = await shoppingCarts.find().populate('shoppingCart user'); 
        return res.status(200).json(carts);
    } catch(e) {
        console.log(e);
        return res.status(404).json({ sucess: false, message: 'Could not load cart information from database'});
    }  
};

const createCart = async (req, res) => {
    
    try{

        const book = await Book.find({title: req.body.title});
        const user = await User.find({user_name: req.body.user_name});
        
        console.log(book);
        console.log(user);


        if(book.length < 1) {
            throw "Cannot create shopping cart, book doesn't exist!";
            return res.status(404).json({success: false, message: e});
        }

        if(user.length < 1) {
            throw "User doesn't exist";
        }

        const data = new shoppingCarts ({
            shoppingCart:[{book: book[0]._id}],
            user: user[0]._id
        })


        await data.save();

        return res.status(200).json(data);
        
        
    } catch(e) {
        console.log(e);
        return res.status(404).json({ success: false, message: e});
    }
    
}


const addBook = async (req, res) => {
    
    try{
        const book = await Book.findOne({title: req.body.title});
        const user = await User.find({user_name: req.body.user_name});

        console.log(book);
        console.log(user);

        if(book.length < 1) {
            throw "Cannot add book to shopping cart, book doesn't exist!";
            return res.status(404).json({success: false, message: e});
        }

        if(user.length < 1) {
            throw "you must create a cart for a new user";
        }  
        

        
    } catch(e) {
        console.log(e);
        return res.status(404).json({success: false, message: e});
    }

}

module.exports = {getAllShoppingCarts, createCart, addBook};
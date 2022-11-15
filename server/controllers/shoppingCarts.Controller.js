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

        const quantity = req.body.quantity ? req.body.quantity : 1; // if user desires a quantity, then set it equal to quantity passed in, else 1

        const book = await Book.findOne({title: req.body.title});
        const user = await User.findOne({user_name: req.body.user_name});

        const myShoppingCart = await shoppingCarts.findOne({ user: user._id });

        if(!book) { // book does not exist in db
            throw "Cannot add book to shopping cart, book doesn't exist!";
        }
        if(!user) { // user does not exist in db
            throw "you must create a cart for a new user";
        }

        const index = myShoppingCart.shoppingCart.findIndex(o => book._id.equals(o.book)); // find index of book with _id, -1 if not exist

        if(index >= 0) { // book exists, update with quantity
            myShoppingCart.shoppingCart[index].quantity += quantity;
        }
        else // book does not exist, add to shoppingCart array
            myShoppingCart.shoppingCart.push({ book: book._id, quantity: quantity });

        await myShoppingCart.save();

        return res.status(200).json({ status: 200, message: "successfully updated shopping cart", shoppingCart: myShoppingCart });
    } catch(e) {
        console.log(e);
        return res.status(404).json({ success: false, message: e.message ? e.message : e });
    }

}

const deleteBook = async (req, res) => {

    try{
        const quantity = req.body.quantity ? req.body.quantity: 1; 
        const book = await Book.findOne({title: req.body.title});
        const user = await User.findOne({user_name: req.body.user_name});
    
        const myShoppingCart = await shoppingCarts.findOne({ user: user._id });
    
        if(!book){
            throw "Cannot delete a book that doesnt exist";
        }
        if(!user) {
            throw "user doesnt have a cart";
        }
    
        const index = myShoppingCart.shoppingCart.findIndex(o => book._id.equals(o.book)); // find index of book with _id, -1 if not exist
    
        if(index >= 0) {
    
            if(myShoppingCart.shoppingCart[index].quantity - quantity <= 0){
                myShoppingCart.shoppingCart.pull({ book: book._id, quantity: quantity });
            }else{
                myShoppingCart.shoppingCart[index].quantity -= quantity;
            }

    
        }

        await myShoppingCart.save();

        return res.status(200).json({ status: 200, message: "successfully updated shopping cart", shoppingCart: myShoppingCart });

    } catch(e) {

        console.log(e);
        return res.status(404).json({ success: false, message: e.message ? e.message : e });

    }

}

module.exports = {getAllShoppingCarts, createCart, addBook, deleteBook};
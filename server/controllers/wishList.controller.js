const {wishList} = require('../models/wishList.model.js');
const {User} = require('../models/user.model.js');
const {Book} = require('../models/bookBrowsing.model.js');

const getWishListController = async (req, res) => {
    try{
        const {userName} = req.query
        
        const list = await wishList.find({
            user: userName

        }).populate('books')

        return res.status(200).json(list)
    }catch(e) {
        return res.status(404).json({ status: 'failed', message: 'wish list not found in database' });
    }  
};

const createWishListController = async (req, res) => {
    try {
        const bookFinder = await Book.find({
            title: req.body.title
        })

        const userFinder = await User.find({
            user_name: req.body.user_name
        })
        

        const newList = new wishList({
            name_of_list: req.body.name_of_list,
            user: userFinder[0]._id,
            books:[bookFinder[0]._id]
        });
        await newList.save();
        res.status(201).json({status: 201, message:"Wish list created", wishList:newList});
    }catch(e){
        res.status(401).json({ status: 401, message: e.message})
    }
}

module.exports = {getWishListController, createWishListController}
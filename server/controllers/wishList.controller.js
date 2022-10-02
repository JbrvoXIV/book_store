const {wishList} = require('../models/wishList.model.js');
const {User} = require('../models/user.model.js');

const getWishListController = async (req, res) => {
    try{
        const {userName} = req.query
        console.log(userName)
        
        const list = await wishList.find({
            user: userName

        }).populate('books')
        console.log(list)
        return res.status(200).json(list)
    }catch(e) {
        return res.status(404).json({ status: 'failed', message: 'wish list not found in database' });
    }  
};

module.exports = {getWishListController}
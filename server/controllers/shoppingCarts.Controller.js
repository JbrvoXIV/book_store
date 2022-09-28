const shoppingCarts = require('../models/shoppingCarts.model.js');      


const getAllShoppingCarts = async (req, res) => {
    try{
       const carts = await shoppingCarts.find().populate('shoppingCart user'); 
        return res.status(200).json(carts);
    } catch(e) {
        console.log(e);
        return res.status(404).json({ sucess: false, message: 'Could not load cart information from database'});
    }  
};


module.exports = {getAllShoppingCarts};
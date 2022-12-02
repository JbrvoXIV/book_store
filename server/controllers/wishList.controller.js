const {wishList} = require('../models/wishList.model.js');
const {User} = require('../models/user.model.js');
const {Book} = require('../models/bookBrowsing.model.js');
const ShoppingCart = require('../models/shoppingCarts.model.js');

const getWishListController = async (req, res) => {
    try{
        const {user_name} = req.query
        
        const list = await wishList.find({
            user_name: user_name

        }).populate('books','title genre price')

        if(list.length == 0)
            throw 'wish list not found in database'

        if(user_name.length == 0)
            throw 'user not found'

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
            user_name: userFinder[0]._id,
            books:[bookFinder[0]._id]
        });
        await newList.save();
        res.status(201).json({status: 201, message:"Wish list created", wishList:newList});
    }catch(e){
        res.status(404).json({ status: 404, message: e.message})
    }
}

const updateWishListController = async (req, res) => {  

    try {
        const { name_of_list, title } = req.body;

        const myWishList = await wishList.findOne({ name_of_list: name_of_list });

        const book = await Book.findOne({ title: title });

        if(!myWishList)
            throw 'List does not exist'
        if(!book)
            throw 'Book does not exist'

        if(myWishList.books.includes(book._id))
            throw 'Book cannot be added to wishlist, already in wishlist'
        else
            myWishList.books.push(book._id);

        await myWishList.save();
        return res.status(200).json({ status: 200, message: "successfully updated wishList", wishList: myWishList });
    } catch(e) {
        return res.status(404).json({ status: 404, message: e.message ? e.message : e });
    }
        
}

const removeBookController = async (req, res) => {
    try {
        
        const {name_of_list, title} = req.body;

        const findList = await wishList.findOne({name_of_list: name_of_list})
        
        const findTitle = await Book.findOne({title:title});

        const findCart = await ShoppingCart.findOne({user: findList.user_name})

        if(!findList)
            throw 'list does not exist'

        if(!findTitle)
            throw 'Book does not exist'

        if(!findCart)
            throw 'Shopping cart does not exist'

        if(findList.books.includes(findTitle._id)){
            findList.books.pull(findTitle._id)
            
            const index = findCart.shoppingCart.findIndex(o => findTitle._id.equals(o.book));
            if (index >= 0 ) 
                findCart.shoppingCart[index].quantity += 1
            else
                findCart.shoppingCart.push({book: findTitle._id, quantity: 1})
        }     
        else
            throw 'Book cannot be removed, not in wishlist'
        
        await findList.save()
        await findCart.save()

        return res.status(200).json({ status: 200, message: "successfully updated wishList", wishList: findList });
    }catch(e){
        return res.status(404).json({ status: 404, message: e.message ? e.message : e });
    }
}

module.exports = {getWishListController, createWishListController, updateWishListController, removeBookController}
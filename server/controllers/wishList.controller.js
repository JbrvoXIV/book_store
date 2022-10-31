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

    const updateWishListController = async (req, res) => {  

        try {

            const wishlistFinder = await wishList.find({
                name_of_list: req.body.name_of_list
            })
            console.log(wishlistFinder)

            const addBook = await Book.find({
            title: req.body.title
            })
            console.log(addBook)
            console.log(addBook[0]._id)
            
            await wishList.findOneAndUpdate({
                name_of_list: req.body.name_of_list
     
            },{
                $push: { _id: addBook[0]._id }
              })
          /*  wishlistFinder[0].books.$addToSet({
                title: addBook[0]._id
            })
          */  
            
        
           /* wishlistFinder[0].books.updateWishListController({
                name_of_list: wishlistFinder[0]._id},
                {$push:{ books: addBook[0]._id }
            })*/ 
           // await wishlistFinder.save();
            await wishList.save()
            
            
            res.status(200).json({status: 200, message:"Book Added"});
        }catch(e){
            res.status(304).json({status: 304, message: e.message})

        }
        
}

module.exports = {getWishListController, createWishListController, updateWishListController}
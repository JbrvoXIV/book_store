const router = require('express').Router();

const { getWishListController, createWishListController, updateWishListController, removeBookController } = require('../controllers/wishList.controller.js');

router.get('/', getWishListController);
router.post('/create',createWishListController);
router.patch('/update', updateWishListController);
router.patch('/remove', removeBookController)

module.exports = router;
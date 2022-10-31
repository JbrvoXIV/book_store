const router = require('express').Router();

const { getWishListController, createWishListController, updateWishListController } = require('../controllers/wishList.controller.js');

router.get('/', getWishListController);
router.post('/create',createWishListController);
router.patch('/update', updateWishListController);

module.exports = router;
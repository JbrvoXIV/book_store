const router = require('express').Router();

const { getWishListController, createWishListController } = require('../controllers/wishList.controller.js');

router.get('/', getWishListController);
router.post('/create',createWishListController)

module.exports = router;
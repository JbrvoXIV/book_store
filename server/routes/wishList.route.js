const router = require('express').Router();

const { getWishListController } = require('../controllers/wishList.controller.js');

router.get('/', getWishListController);

module.exports = router;
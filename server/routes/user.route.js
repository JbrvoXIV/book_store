const router = require('express').Router();

const { 
    getUserByUserNameController,
    createUserController,
    updateUserController
} = require('../controllers/user.controller.js');

router.get('/', getUserByUserNameController);
router.post('/create', createUserController);
router.patch('/update/', updateUserController);

module.exports = router;
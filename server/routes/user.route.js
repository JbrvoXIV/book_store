const router = require('express').Router();

const { getUserByUserNameController, createUserController } = require('../controllers/user.controller.js');

router.get('/', getUserByUserNameController);
router.post('/create', createUserController);

module.exports = router;
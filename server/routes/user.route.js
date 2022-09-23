const router = require('express').Router();

const { getUserByUserNameController } = require('../controllers/user.controller.js');

router.get('/', getUserByUserNameController);

module.exports = router;
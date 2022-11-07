const router = require('express').Router();

const { 
    getUserByUserNameController,
    createUserController,
    updateUserController,
    createCreditCardController,
    getCreditCardsController
} = require('../controllers/user.controller.js');

const validateDate = (req, res, next) => {
    const date = req.body.date_valid.split("/");
    if(date.length != 2)
        res.date = 'INVALID DATE FORMAT';
    else if(/[a-zA-Z]/.test(req.body.date_valid.contains))
        res.date = 'DATE CONTAINS NON-NUMBERS';
    else if(date[0].length != 2 || parseInt(date[0]) < 1 || parseInt(date[0]) > 12)
        res.date = 'INCORRECT MONTH FORMAT (MM) WHERE 1 < MM < 12';
    else if(date[1].length != 4)
        res.date = 'INCORRECT YEAR FORMAT (YYYY)';
    else
        res.date = new Date(parseInt(date[1]), parseInt(date[0]) - 1, 1, 11, 59, 59, 59);
    next();
}

router.get('/', getUserByUserNameController);
router.post('/create', createUserController);
router.patch('/update/', updateUserController);

router.post('/creditcard/create', validateDate, createCreditCardController);
router.get('/creditcard/:user_name', getCreditCardsController);

module.exports = router;
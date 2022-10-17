const router = require('express').Router();

const { getDetailsOfBookByIsbnController } = require('../controllers/bookDetails.Controller.js');
const { getDetailsOfBookByAuthorController } = require('../controllers/bookDetails.Controller.js');
const { createNewBookController } = require('../controllers/bookDetails.Controller.js');

router.get('/:isbn', getDetailsOfBookByIsbnController);
router.get('/', getDetailsOfBookByAuthorController);
router.post('/create', createNewBookController);

module.exports = router;


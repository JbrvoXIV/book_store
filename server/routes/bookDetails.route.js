const router = require('express').Router();

const { getDetailsOfBookByIsbnController } = require('../controllers/bookDetails.Controller.js');
const { getDetailsOfBookByAuthorController } = require('../controllers/bookDetails.Controller.js');

router.get('/:isbn', getDetailsOfBookByIsbnController);
router.get('/', getDetailsOfBookByAuthorController);

module.exports = router;


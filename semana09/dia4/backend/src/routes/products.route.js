const {Router} = require('express');
const router = Router();

const {getAll} = require('../controllers/product.controller');

router.route('/')
    .get(getAll)

module.exports = router;
const {Router} = require('express');
const router = Router();

const {getAll,create,uploadImage} = require('../controllers/product.controller');

router.route('/')
    .get(getAll)
    .post(create)

router.route('/upload')
    .post(uploadImage)

module.exports = router;
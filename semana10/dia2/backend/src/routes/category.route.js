const {Router} = require('express');
const router = Router();

const {verifyToken} = require('../middlewares/auth.handler');

const {getAll,create} = require('../controllers/category.controller');

router.route('/')
    .get(verifyToken,getAll)
    .post(create)

module.exports = router;
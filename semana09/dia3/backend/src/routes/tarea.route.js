const {Router} = require('express');
const router = Router();

const {getAll,create} = require('../controllers/tarea.controller');

router.route('/')
    .get(getAll)
    .post(create)

module.exports = router;
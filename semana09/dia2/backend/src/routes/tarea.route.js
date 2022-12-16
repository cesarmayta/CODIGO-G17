const {Router} = require('express');
const router = Router();

const {getAll} = require('../controllers/tarea.controller');

router.route('/')
    .get(getAll)

module.exports = router;
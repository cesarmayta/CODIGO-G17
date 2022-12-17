const {Router} = require('express');
const router = Router();

const {getAll,create,update} = require('../controllers/tarea.controller');

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .put(update)

module.exports = router;
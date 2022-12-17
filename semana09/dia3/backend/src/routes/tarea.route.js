const {Router} = require('express');
const router = Router();

const {getAll,create,update,deleteOne} = require('../controllers/tarea.controller');

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .put(update)
    .delete(deleteOne)

module.exports = router;
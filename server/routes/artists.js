const express = require('express');
const router = express.Router();
const controller = require('../controllers/artistsController')

router.post('/', controller.create);
router.get('/', controller.list);
//get by id
router.get('/:id', controller.index);
router.put('/:id', controller.update);
router.delete('/:id', controller.destoy)

module.exports = router;
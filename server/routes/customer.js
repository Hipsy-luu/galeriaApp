const express = require('express');
const router = express.Router();
const controller = require('../controllers/customersController')

router.post('/', controller.create);
router.get('/', controller.list);
//get by id
router.get('/:id', controller.index);
router.put('/:id', controller.update);
router.delete('/:id', controller.destoy)

module.exports = router;
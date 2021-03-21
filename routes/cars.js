const router = require('express').Router();
const carsCtrl = require('../controllers/cars');

router.get('/', carsCtrl.index);
router.get('/new', carsCtrl.new);
router.post('/', carsCtrl.create);
router.get('/:id/edit', carsCtrl.edit);
router.get('/:id', carsCtrl.show);
router.put('/:id', carsCtrl.update);
router.delete('/:id', carsCtrl.delete);

module.exports = router;
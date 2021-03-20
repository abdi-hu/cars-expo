const router = require('express').Router();
const carsCtrl = require('../controllers/cars');

router.get('/', carsCtrl.index);
router.get('/:id', carsCtrl.show);
router.get('/new', carsCtrl.new);
router.post('/', carsCtrl.create);

module.exports = router;
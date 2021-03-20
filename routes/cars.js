const router = require('express').Router();
const carsCtrl = require('../controllers/cars');

router.get('/', carsCtrl.index);
router.get('/new', carsCtrl.new);
router.post('/', carsCtrl.create);
router.get('/:id', carsCtrl.show);

module.exports = router;
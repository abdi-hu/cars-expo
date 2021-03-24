const router = require('express').Router();
const carsCtrl = require('../controllers/cars');
const bidsCtrl = require('../controllers/bids');

router.get('/', carsCtrl.index);
router.get('/new', carsCtrl.new);
router.post('/', carsCtrl.create);
router.get('/:id/edit', carsCtrl.edit);
router.get('/:id', carsCtrl.show);
router.put('/:id', carsCtrl.update);
router.delete('/:id', carsCtrl.delete);

// //Bids
// router.get('/:id/bids/new', bidsCtrl.newBid);
// router.post('/:id/bids', bidsCtrl.create);

module.exports = router;
const router = require('express').Router();
const bidsCtrl = require('../controllers/bids');

router.post('/cars/:id/bids', bidsCtrl.create)
router.get('/bids', bidsCtrl.index);

module.exports = router;
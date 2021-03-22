const router = require('express').Router();
const ratingsCtrl = require('../controllers/ratings');

router.post('/cars/:id/ratings', ratingsCtrl.create)


module.exports = router;
const router = require('express').Router();
const indexCtrl = require('../controllers/cars');

router.get('/', indexCtrl.index)

module.exports = router;
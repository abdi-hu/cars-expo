const router = require('express').Router();
// const indexCtrl = require('../controllers/index');


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Muscle Car Expo'
    });
})

module.exports = router;


// indexCtrl.index
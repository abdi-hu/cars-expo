const router = require('express').Router();
// const indexCtrl = require('../controllers/index');


router.get('/', (req, res) => {
    res.render('index', {
        title: 'Muscle Car Expo',
        loggedIn: req.user
    });
})

module.exports = router;


// indexCtrl.index
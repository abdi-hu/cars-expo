const router = require('express').Router();
const usersCtrl = require('../controllers/users');

router.get('/signin', usersCtrl.signIn);
router.post('/login', usersCtrl.login)

router.get('/new', usersCtrl.new);
router.post('/signup', usersCtrl.signUp);

module.exports = router;
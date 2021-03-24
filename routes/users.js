const router = require('express').Router();
const usersCtrl = require('../controllers/users');

//Login
router.get('/signin', usersCtrl.signIn);
router.post('/login', usersCtrl.login)

//Register
router.get('/new', usersCtrl.new);
router.post('/signup', usersCtrl.signUp);

//Logout
router.get('/logout', usersCtrl.logout);

module.exports = router;
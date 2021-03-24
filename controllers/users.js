const User = require('../models/user');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = bcrypt.genSaltSync(10);

module.exports = {
    signIn,
    login,
    new: newUser,
    signUp,
    logout
}
function signIn(req, res) {
    res.render('users/login', { title: 'Login', loggedIn: req.user })
}
function login(req, res) {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if (foundUser === null) {
            res.redirect('signin')
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            if (doesPasswordMatch) {
                req.session.userId = foundUser._id;
                req.session.username = foundUser.username;
                console.log(req.session);
                res.redirect('/cars');
            } else {
                res.redirect('signin');
            }
        }
    });
}
function newUser(req, res) {
    res.render('users/new', { title: 'Register', loggedIn: req.user });
}
function signUp(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, SALT_ROUNDS);
    User.create(req.body, (err, newUser) => {
        res.redirect('/');
    });
}
function logout(req, res) {
    req.session.destroy();
    res.redirect('/');
}
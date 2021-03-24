const Car = require('../models/car');
module.exports = {
    index,
    show,
    new: newCar,
    create,
    edit,
    update,
    delete: deleteCar,
}

function index(req, res) {
    if (req.user) {
        Car.find({}, (err, cars) => {
            res.render('cars/index', { cars, title: "Current Inventory", loggedIn: req.user })
        })
    } else {
        res.redirect('/users/signin');
    }
}
function show(req, res) {
    if (req.user) {
        Car.findById(req.params.id, (err, car) => {
            res.render('cars/show', { car, loggedIn: req.user, title: 'Details', admin: req.user.admin });
        });
    } else {
        res.redirect('/users/signin');
    }
}
function newCar(req, res) {
    if (req.user) {
        if (req.user.admin) {
            res.render('cars/new', { loggedIn: req.user });
        } else {
            res.send('<h1>Your Acount is not authorized to view this page</h1>');
        }
    } else {
        res.redirect('/users/signin');
    }
}
function create(req, res) {
    Car.create(req.body, (err, car) => {
        res.redirect('/cars');
    });
}
function edit(req, res) {
    Car.findById(req.params.id, (err, car) => {
        res.render(`cars/edit`, { car, loggedIn: req.user });
    })
}
function update(req, res) {
    Car.findByIdAndUpdate(req.params.id, req.body, (err, updatedcar) => {
        res.redirect('/cars');
    });
}
function deleteCar(req, res) {
    Car.findByIdAndRemove(req.params.id, (err, deletedCar) => {
        res.redirect('/cars');
    })
}
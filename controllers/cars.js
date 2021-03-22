const { findByIdAndDelete } = require('../models/car');
const Car = require('../models/car');
module.exports = {
    index,
    show,
    new: newCar,
    create,
    edit,
    update,
    delete: deleteCar
}

function index(req, res) {
    Car.find({}, (err, cars) => {
        res.render('cars/index', { cars, title: "Current Inventory", loggedIn: req.user })
    })
}
function show(req, res) {
    Car.findById(req.params.id, (err, car) => {
        res.render('cars/show', { car, loggedIn: req.user });
    });
}
function newCar(req, res) {
    res.render('cars/new', { loggedIn: req.user });
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


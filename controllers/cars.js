const car = require('../models/car');
const Car = require('../models/car');
module.exports = {
    index,
    show,
    new: newCar,
    create,
    edit,
    update,
}

function index(req, res) {
    Car.find({}, (err, cars) => {
        res.render('cars/index', { cars })
    })
}
function show(req, res) {
    Car.findById(req.params.id, (err, car) => {
        res.render('cars/show', { car });
    });
}
function newCar(req, res) {
    res.render('cars/new');
}
function create(req, res) {
    Car.create(req.body, (err, car) => {
        res.redirect('/cars');
    });
}
function edit(req, res) {
    Car.findById(req.params.id, (err, car) => {
        res.render(`cars/edit`, { car });
    })
}
function update(req, res) {
    Car.findByIdAndUpdate(req.params.id, req.body, (err, updatedcar) => {
        res.redirect('/cars');
    });
}


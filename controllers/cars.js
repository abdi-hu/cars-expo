const Car = require('../models/car');
module.exports = {
    index,
    show,
    new: newCar,
    create,
}

function index(req, res) {
    Car.find({}, (err, cars) => {
        res.render('cars/index', { cars })
    })
}
function show(req, res) {
    Car.findById(req.params.id, (err, car) => {
        res.render('cars/show', car);
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
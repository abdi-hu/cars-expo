const Car = require('../models/car');
module.exports = {
    index,
}

function index(req, res) {
    Car.find({}, (err, cars) => {
        res.render('index', { cars })
    })
}
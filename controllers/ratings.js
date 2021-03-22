const Car = require('../models/car');

function create(req, res) {
    Car.findById(req.params.id, (err, car) => {
        car.rating.push(req.body);
        car.save((err) => {
            res.redirect(`/cars/${car._id}`);
        });
    });
}
module.exports = { create };
const Car = require("../models/car");

function create(req, res) {
	Car.findById(req.params.id, (err, car) => {
		req.body.firstName = req.session.firstName;
		req.body.lastName = req.session.lastName;
		req.body.email = req.session.email;
		car.bids.push(req.body);
		car.save((err) => {
			res.redirect(`/cars/${car._id}`);
		});
	});
}
function index(req, res) {
	if (req.user) {
		if (req.user.admin) {
			Car.find({}, (err, cars) => {
				res.render("bids/index", {
					cars,
					title: "Current Bids",
					loggedIn: req.user,
				});
			});
		} else {
			res.send("<h1>Your Acount is not authorized to view this page</h1>");
		}
	} else {
		res.redirect("/users/signin");
	}
}
module.exports = {
	create,
	index,
};

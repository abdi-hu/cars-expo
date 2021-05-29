const Car = require("../models/car");
module.exports = {
	index,
	show,
	new: newCar,
	create,
	edit,
	update,
	delete: deleteCar,
};

function index(req, res) {
	if (req.user) {
		Car.find({}, (err, cars) => {
			res.render("cars/index", {
				cars,
				title: "Current Inventory",
				loggedIn: req.user,
			});
		});
	} else {
		res.redirect("/google");
	}
}
function show(req, res) {
	if (req.user) {
		Car.findById(req.params.id, (err, car) => {
			const highestBid = Math.max(
				car.bids.map((bid) => {
					return parseInt(bid.amount);
				})
			);
			const auctionDate = new Date("Sept 25, 2021 16:00:00").getTime();
			const now = new Date().getTime();
			const auctionTimer = auctionDate - now;
			const days = Math.floor(auctionTimer / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(auctionTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(auctionTimer % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((auctionTimer % (1000 * 60)) / 1000);
			res.render("cars/show", {
				car,
				highestBid,
				auctionTimer,
				days,
				hours,
				minutes,
				seconds,
				loggedIn: req.user,
				title: "Details",
				admin: req.user.admin,
			});
		});
	} else {
		res.redirect("/google");
	}
}
function newCar(req, res) {
	if (req.user) {
		if (req.user.admin) {
			res.render("cars/new", { loggedIn: req.user, title: "New Car" });
		} else {
			//need to create a view for this
			res.send("<h1>Your Acount is not authorized to view this page</h1>");
		}
	} else {
		res.redirect("/google");
	}
}
function create(req, res) {
	Car.create(req.body, (err, car) => {
		res.redirect("/cars");
	});
}
function edit(req, res) {
	Car.findById(req.params.id, (err, car) => {
		res.render(`cars/edit`, { car, loggedIn: req.user, title: "Edit Car" });
	});
}
function update(req, res) {
	Car.findByIdAndUpdate(req.params.id, req.body, (err, updatedcar) => {
		res.redirect("/cars");
	});
}
function deleteCar(req, res) {
	Car.findByIdAndRemove(req.params.id, (err, deletedCar) => {
		res.redirect("/cars");
	});
}

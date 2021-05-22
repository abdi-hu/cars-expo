const router = require("express").Router();
const passport = require("passport");
// const indexCtrl = require('../controllers/index');

router.get("/", (req, res) => {
	res.render("index", {
		title: "Muscle Car Expo",
		loggedIn: req.user,
	});
});
router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	function (req, res) {
		console.log(req.user);
		// Successful authentication, redirect home.
		res.redirect("/cars");
	}
);

module.exports = router;

// indexCtrl.index

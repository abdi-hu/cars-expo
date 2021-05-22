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
	"/auth/google",
	passport.authenticate("google", { scope: ["profile"] })
);

router.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect("/");
	}
);

module.exports = router;

// indexCtrl.index

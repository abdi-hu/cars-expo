const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

passport.use(
	new GoogleStrategy(
		{
			clientID:
				"235976971756-5l6s6qvckqcftjr5bqjr49javarr1uh9.apps.googleusercontent.com",
			clientSecret: "T39nU4sXvGP7US5vsDavqoyA",
			callbackURL: "http://localhost:3000",
		},
		function (accessToken, refreshToken, profile, cb) {
			// a user has logged in with OAuth...
			User.findOne({ googleId: profile.id }, function (err, user) {
				if (err) return cb(err);
				if (user) {
					return cb(null, user);
				} else {
					//we have a new user via OAuth!
					const newUser = new User({
						name: profile.displayName,
						email: profile.emails[0].value,
						googleId: profile.id,
					});
					newUser.save(function (err) {
						if (err) return cb(err);
						//return new user to callback function
						return cb(null, newUser);
					});
				}
			});
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

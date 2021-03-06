const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK,
		},
		function (accessToken, refreshToken, profile, cb) {
			// user has logged in with OAuth
			User.findOne({ googleId: profile.id }, function (err, user) {
				if (err) return cb(err);
				if (user) {
					return cb(null, user);
				} else {
					//new user via OAuth
					const newUser = new User({
						firstName: profile.name.givenName,
						lastName: profile.name.familyName,
						googleId: profile.id,
						email: profile.emails[0].value,
						avatar: profile.photos[0].value,
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

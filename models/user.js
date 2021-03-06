const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	googleId: String,
	email: String,
	avatar: String,
	admin: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("User", userSchema);

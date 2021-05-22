const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	usernname: String,
	name: String,
	googleId: String,
	password: String,
	email: String,
	admin: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("User", userSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    admin: Boolean,
});

module.exports = mongoose.model('User', userSchema);
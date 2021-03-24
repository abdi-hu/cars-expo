const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    amount: Number,
    username: String,
});
const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    image: String,
    engineType: String,
    description: String,
    bids: [bidSchema],
});

module.exports = mongoose.model('Car', carSchema);
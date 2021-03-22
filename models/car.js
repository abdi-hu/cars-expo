const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    performance: {
        type: Number,
        min: 1,
        max: 10,
    },
    style: {
        type: Number,
        min: 1,
        max: 10,
    },
    text: String,
    username: String,
})

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    image: String,
    engineType: String,
    description: String,
    rating: [ratingSchema],
})

module.exports = mongoose.model('Car', carSchema);
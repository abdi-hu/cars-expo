const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    image: String,
    engineType: String,
    description: String,
    rating: Number,
})

module.exports = mongoose.model('Car', carSchema);
const mongoose = require('mongoose')
const toppingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const Topping = mongoose.model('Topping', toppingSchema);
module.exports = {Topping, toppingSchema};
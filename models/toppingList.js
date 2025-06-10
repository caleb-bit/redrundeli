const mongoose = require('mongoose')
const {Topping, toppingSchema} = require('./topping');
const toppingListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    toppings: [Topping],
    isSingleChoice: {
        type: Boolean,
        required: true
    }
});


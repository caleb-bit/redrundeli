const mongoose = require('mongoose');
const {Dish, dishSchema} = require('./dish');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    dishes: [dishSchema]
})

categorySchema.virtual('url').get(
    function () {
        return this.name.replace(/\s+/g, '-').toLowerCase();
    }
)

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
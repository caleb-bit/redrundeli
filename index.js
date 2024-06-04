const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Category = require('./models/category');
const Dish = require('./models/dish');
const app = express();

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) // allows accessing req.body for post


mongoose.connect('mongodb://localhost:27017/redrundeli')
    .then(() => {
        console.log('mongo connection open');
    }).catch(err => {
        console.log(err);
    })


app.get('/', (req, res) => {
    res.render('home', {title: 'Home'});
})

app.get('/menu', async (req,res) => {
    const categories = await Category.find({});
    res.render('menu', {title: 'Menu', categories});
})

app.get('/menu/:catId', async (req,res) => {
    const {catId} = req.params;
    const category = await Category.findById(catId);
    res.render('pickDish', {category, title: category.name, dishes: category.dishes});
})

app.get('/dish/:catId/:dishId', async (req,res) => {
    const {catId, dishId} = req.params;
    const category = await Category.findById(catId);
    const dish = await category.dishes.id(dishId);
    console.log(dish.name);    
    res.send('hi');
})

app.listen(3000, () => {
    console.log('listening on 3000');
})
const Category = require('./models/category');
const mongoose = require('mongoose');
const { Dish, dishSchema } = require('./models/dish');
mongoose.connect('mongodb://localhost:27017/redrundeli')
    .then(() => {
        console.log('mongo connection open');
    })
    .catch(err => {
        console.log('mongo connection error');
        console.log(err);
    });

const categories = ['Breakfast Sandwiches', 'Breakfast Platters', 'Breakfast Wraps', 'Breakfast Omelettes', 'Red Run Specialties', 'Lunch Combos', 'Classic Sandwiches', 'Lunch Platters', 'Wrap Specialties', 'Salads', 'Soups', 'Hot Grill', 'Red Run Deepfry', 'Red Run Fish', 'Sides'];
const categoryPics = ['breakfast-sandwiches.png', 'breakfast-platters.png', 'breakfast-wraps.png', 'breakfast-omelettes.png', 'red-run-specialties.png', 'lunch-combos.png', 'classic-sandwiches.png', 'lunch-platters.png', 'wrap-specialties.png', 'salads.png', 'soups.png', 'hot-grill.png', 'red-run-deepfry.png', 'red-run-fish.png', 'sides.png'];
const allDishes = [[
    'Egg and Cheese Sandwich',
    'Bacon Egg and Cheese Sandwich', 'Sausage Egg and Cheese Sandwich', 'Scrapple Egg and Cheese Sandwich',
    'Ham Egg and Cheese Sandwich', 'Turkey Sausage Egg and Cheese Sandwich', 'Turkey Bacon Egg and Cheese Sandwich',
    'Beef Sausage Egg and Cheese Sandwich',
    'Steak Egg and Cheese Sandwich', 'French Toast 3 pcs',
    'Hot Cakes 3 pcs',
    'Waffle',
    'Bagel with Butter and Jelly',
    'Bagel with Cream Cheese',
    'Home Fries',
    'BLT Sandwich',
    'Grilled Cheese Sandwich',
    'Grits'
], [
    'Home Fries, Two Eggs, Meat, and Toast Platter',
    'Grits, Two Eggs, Meat, and Toast Platter',
    'Hot Cakes, Two Eggs, and Meat Platter',
    'French Toast, Two Eggs, and Meat Platter',
    'Waffle, Two Eggs, and Meat Platter',
    'Waffle and Chicken Tenders Platter'
], [
    'Breakfast Meat, Two Eggs, and Cheese Wrap',
    'Western Omelette Cheese Wrap',
    'Veggie Omelette Cheese Wrap'
], [
    'Cheese and 3 Eggs Omelette',
    'Omelette with Meat',
    'Western Omelette',
    'Vegetable Omelette'
], [
    'Red Run Cheese Steak',
    'Original Cloak and Dagger',
    'Bacon Tuna or Chicken Salad Melt',
    'Swiss Honey Melt',
    'Buttermilk Bacon Breast',
    'Hot Boneless Buffalo Wings',
    'Hot Buffalo Sub',
    'Multi Chicken Salad',
    'Multi Tuna Salad',
    'Ciabatta Hot Roast Beef',
    'Ciabatta Grilled Chicken',
    'Cordon Blue Chicken',
    'Honey Turkey Oasis Croissant',
    'The Natural',
    'Turkey Natural',
    'Avocado Croissant Breakfast Sandwich'
], [
    'Cheese Steak Sub Combo',
    'Chicken Cheese Steak Sub Combo',
    'Cheese Burger Sub Combo',
    'Cheese Burger on Kaiser Roll Combo',
    'Cheese Fish Filet Sub Combo',
    'Cheese Fish Filet on Kaiser Roll Combo',
    'Reuben (Corned Beef or Turkey) Combo',
    'Italian Cold Cut Sub Combo',
    'Turkey and Cheese Sub Combo',
    'Ham and Cheese Sub Combo',
    'Turkey Cheese Burger Sub Combo',
    'Turkey Cheese Burger on Kaiser Roll Combo'
], [
    'Club Sandwich with Chips and Pickles',
    'Chicken Salad Club Sandwich',
    'Italian Cold Cut Sandwich',
    'Turkey Breast Sandwich',
    'Corned Beef Sandwich',
    'Ham and Cheese Sandwich',
    'Roast Beef Sandwich',
    'Chicken Salad Sandwich',
    'Tuna Salad Sandwich',
    'Shrimp Salad Sandwich',
    'Egg Salad Sandwich'
], [
    'Chicken Tender (3 pcs)',
    'Chicken Tender (4 pcs)',
    'Hot Roast Beef and Gravy',
    'Hot Roast Turkey and Gravy'
], [
    'Turkey Club Wrap',
    'Avocado Grilled Chicken Wrap',
    'Chicken Caesar Salad Wrap',
    'Popeye Wrap',
    'Original Grilled Chicken Wrap',
    'Honey Cucumber Wrap',
    'Veggie Wrap',
    'Jumbo Fried Shrimp (4 pcs) Wrap or Sub'
], [
    'Garden Salad',
    'Chef Salad',
    'Chicken Caesar Salad',
    'Chicken Tender Salad',
    'Hot Buffalo Salad',
    'Grilled Chicken Salad'
], [
    'Chicken Noodle Soup'
], [
    'Cheeseburger (Sandwich or 8" Sub)',
    'Turkey Cheeseburger (Sandwich or 8" Sub)',
    'Grilled Fish Filet (Sandwich or 8" Sub)',
    'Grilled Chicken Breast (Sandwich or 8" Sub)',
    'Hot Pastrami Sandwich',
    'Reuben or Turkey Reuben',
    'Kosher Hot Dog',
    'Beef Sausage Hot Dog'
], [
    'Jumbo Shrimps (5 pcs)',
    'Crab Sticks (5 pcs)'
], [
    'Lake Trout (1 pc)',
    'Lake Trout (2 pcs)',
    'Whiting (2 pcs)',
    'Tilapia (2 pcs)'
], [
    'French Fries',
    'French Fries with Gravy',
    'French Fries with Cheese',
    'Cole Slaw',
    'Onion Rings',
    'Mozarella Sticks (6 pcs)'
]];
const allPrices = [[
    3.49, 4.99, 4.99, 4.99, 5.59, 5.59, 5.59, 5.59, 8.99, 5.99, 5.99, 5.59, 1.99, 2.99, 3.29, 6.99, 3.59, 2.29
], [
    8.99, 8.99, 9.99, 9.99, 9.99, 9.99
], [
    5.59, 6.99, 6.99
], [
    6.59, 7.99, 8.99, 8.99
], [
    9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 6.99, 10.99, 6.99
], [
    13.99, 13.99, 13.99, 10.99, 13.99, 10.99, 13.99, 13.99, 13.99, 13.99, 14.99, 11.99
], [
    10.99, 11.99, 9.39, 7.99, 7.99, 7.99, 7.99, 7.99, 7.99, 8.99, 6.99
], [
    9.99, 11.99, 10.99, 10.99
], [
    9.39, 9.39, 9.39, 9.39, 9.39, 9.39, 8.59, 9.39
], [
    5.99, 10.99, 10.99, 11.99, 11.99, 10.99
], [
    4.29
], [
    5.99, 6.99, 5.99, 7.99, 7.99, 9.39, 4.99, 5.99
], [
    5.99, 5.99
], [
    8.99, 16.99, 7.99, 5.99
], [
    3.59, 4.59, 4.59, 2.99, 3.99, 6.99
]];
const allDescriptions = [
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', ''],
    ['', '', '', ''],
    ['Marinated Grilled Rib-Eye Steak, Grilled Onions, Melted Provolone Cheese with Lettuce, Tomato, and Onion',
        'Fresh Cut Corned Beef, Creamy Cole Slaw, and Russian Dressing on Rye',
        'Tuna or Chicken Salad with Melted Swiss Cheese and Bacon on Wheat',
        'Crunchy Chicken Tender, Crispy Bacon, Melted Swiss Cheese, and Rich Honey Mustard Dressing on a Kaiser Roll',
        'Crunchy Chicken Tenders, Crispy Bacon, Lettuce, Tomato, and Buttery Ranch Dressing on a Kaiser Roll',
        'Crunchy Chicken Tender (3 pcs) soaked in house-made HOT sauce served with celery and a choice of ranch or blue cheese dressing',
        'Crunchy Chicken Tenders soaked in house-made HOT sauce with a choice of ranch or blue cheese dressing in 8" sub',
        'Chicken Salad, Avocado, Lettuce on a toasted mutli grain',
        'Tuna Salad, Avocado, Baby Spinach, Swiss Cheese, Tomato, in a toasted Multi Grain',
        'Hot Roasted Beef, Swiss Cheese, Grilled Green Pepper and Onion in a toasted Ciabatta',
        'Grilled Chicken with Swiss Cheese, Grilled Peppers and Onions in a toasted Ciabatta',
        'Grilled Chicken Breast, Crispy Bacon, Melted Swiss Cheese, and Rich Blue Cheese dressing on a Kaiser Roll',
        'Roasted Turkey, Alfafa Sprouts, Lettuce, Tomato, Honey Mustard in Croissant',
        'Alfafa Sprouts, Havarti Cheese, Avocado, Cucumber, Lettuce, Tomato, and Oregano in whole wheat bread with mayo',
        '', ''
    ],
    ['Served with French Fries and 16 oz Fountain Soda',
        'Served with French Fries and 16 oz Fountain Soda',
        'Served with French Fries and 16 oz Fountain Soda',
        'Served with French Fries and 16 oz Fountain Soda',
        'Served with French Fries and 16 oz Fountain Soda',
        'Served with French Fries and 16 oz Fountain Soda',
        'Served with French Fries and 16 oz Fountain Soda',
        'Served with French Fries and 16 oz Fountain Soda',
        '', '', 'Served with French Fries and 16 oz Fountain Soda', ''], [
        '', '', '', '', '', '', '', '', '', '', ''],
    [
        '', '', '', ''
    ], [
        'Roasted Turkey, Bacon, Lettuce, Tomato, and Mayonnaise', 'Grilled Chicken Breast, Avocado, Grilled Green Pepper, Lettuce with Honey Mustard or Russian Dressing',
        'Grilled Chicken Breast, Bacon, Chopped Romaine Lettuce, Parmesan Cheese, and Caesar Dressing',
        'Roasted Turkey, Lots of Spinach, Caramelized Onions, Harvati Cheese, and Honey Mustard',
        'Grilled Chicken Breast, Lettuce, Tomatoes, Honey Mustard, Swiss Cheese',
        'Roasted Turkey, Lettuce, Cucumber, Honey Mustard, and Swiss Cheese',
        'Avocado, Alfafa Sprouts, Spinach, Lettuce, Cucumber, Tomato, and Swiss Cheese in Spinach Wrap or Whole Wheat with Ranch Dressing',
        'Jumbo Fried Shrimp, Lettuce, Tomato, and Mayonnaise'
    ], [
        '', 'Turkey, Ham, and cheddar cheese on our homemade garden salad', '', '', '', ''
    ], [''], ['', '', '', '', '', '', '', ''], ['', ''], ['', '', '', ''], ['', '', '', '', '', '']
];

const seedCategories = [];
for (let i = 0; i < categories.length; i++) {
    const dishes = [];
    for (let j = 0; j < allDishes[i].length; j++) {
        dishes.push(new Dish({ name: allDishes[i][j], price: allPrices[i][j], description: allDescriptions[i][j] }));
    }
    seedCategories.push({ name: categories[i], img: "img/" + categoryPics[i], dishes });
}

Category.insertMany(seedCategories)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
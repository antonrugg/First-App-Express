const mongoose = require('mongoose');
const Product = require('./models/product');
//require mongoose and product schema

main().catch(err => {
    console.log(err)
    console.log('oh no error')
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/generalMarket');
    console.log('mongo connected');
}
//mongoose connection

//i will run this seeds.js file every time i want to add some data in the database

const vase = new Product({
    name: 'Vase',
    description: 'Old vase from my grandmother',
    price: 5.99,
    category: 'vases',
    quantity: 1
});

vase.save()
    .then(vase => {
    console.log(vase);
    })
    .catch(error => {
    console.log(error);
    })
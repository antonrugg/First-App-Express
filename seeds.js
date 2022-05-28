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

// const vase = new Product({
//     name: 'Vase',
//     description: 'Old vase from my grandmother',
//     price: 5.99,
//     category: 'vases',
//     quantity: 1
// });

// vase.save()
//     .then(vase => {
//     console.log(vase);
//     })
//     .catch(error => {
//     console.log(error);
//     })


const seedProducts = [
    {
        name: 'Vase',
        description: 'Old vase from my grandmother',
        price: 5.99,
        category: 'vases',
        quantity: 1
    },
    {
        name: 'Blue vase',
        description: 'Blue vase',
        price: 7.99,
        category: 'vases',
        quantity: 2
    },
    {
        name: 'Ear ring',
        description: 'Ear ring with old stone',
        price: 15.49,
        category: 'old jewelry',
        quantity: 5
    },
    {
        name: 'For Whom the Bell Tolls',
        description: 'must read book from hemingway, good conditions',
        price: 4.99,
        category: 'books',
        quantity: 1
    },
    {
        name: 'Big old knife',
        price: 3.99,
        category: 'knives',
        quantity: 2
    },
    

]


Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    })
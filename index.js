const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');

main().catch(err => {
    console.log(err)
    console.log('oh no error')
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/movieApp');
    console.log('mongo connected');
}

app.use(express.static(path.join(__dirname, 'public')));
//added use and express.static on public directory to serve static content that needs to be rendered everytime we make a request
//static method is a middleware, we can think about it like something always between a request and a response, it will be served anyway


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!!!");
})
//listening on port 3000

app.get('/', (req, res) => {
    console.log('THIS IS HOME REQUEST');
    res.render('home');
})
//home page

app.get('/products', (req, res) => {
  
    res.render('products')
})
//products get request

app.get('/products/:productId', (req, res) => {
    
    
    
})
//product get details request


app.get('/about-us', (req, res) => {
   
    res.render('about-us');
})
//about us get request

app.get('/add-product', (req, res) => {
    
    res.render('add-product');
})
//add produt get request

app.post('/add-product', (req, res) => {
    
    res.render('add-product');
})
//add product post request

app.get('/contact-us', (req, res) => {
    
    res.render('contact-us');
})
//add produt get request




app.get('*', (req, res) => {
    res.send('<h1>Something went wrong, go back.</h1>');
})
//general catch all response when we enter a wrong request path, this needs to be always the last one


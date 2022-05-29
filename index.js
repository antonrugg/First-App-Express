const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


const Product = require('./models/product');
const { urlencoded } = require("express");
//require on product schema

main().catch(err => {
    console.log(err)
    console.log('oh no error')
});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/generalMarket');
    console.log('mongo connected');
}

app.use(express.static(path.join(__dirname, 'public')));
//added use and express.static on public directory to serve static content that needs to be rendered everytime we make a request
//static method is a middleware, we can think about it like something always between a request and a response, it will be served anyway
//tldr: need to write this to use css/styles in public directory


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//middlewares


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!!!");
})
//listening on port 3000

app.get('/', (req, res) => {
    console.log('THIS IS HOME REQUEST');
    res.render('home');
})
//home page

app.get('/products/index', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('products/index', { products });
})
//products get request


app.get('/products/:id', async (req, res) => {
    const { id } = req.params; //This property is an object containing properties mapped to the named route “parameters”.
    //For example, if you have the route / user /: name, then the “name” property is available as req.params.name.T
    const product = await Product.findById(id);
    console.log(product);
    //async await function - store specific product found by id in variable
    res.render('products/details', { product });
    
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

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})
//add product post request

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });

})
//edit product get request

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`${product._id}`);
})

app.get('/contact-us', (req, res) => {
    
    res.render('contact-us');
})
//add produt get request




app.get('*', (req, res) => {
    res.send('<h1>Something went wrong, go back.</h1>');
})
//general catch all response when we enter a wrong request path, this needs to be always the last one


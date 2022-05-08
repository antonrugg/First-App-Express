const express = require("express");
const app = express();
const redditData = require("./data.json");
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
//added use and express.static on public directory to serve static content that needs to be rendered everytime we make a request
//statis method is a middleware, we can think about it like something always between a request and a response, it will be served anyway


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// app.use((req, res) => {
//     console.log("PRINT THIS FOR EVERY REQUEST OF EVERY KIND!!!");
//     res.send('<h1>Hello World</h1>');

// })

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!!!");
})

app.get('/', (req, res) => {
    console.log('THIS IS HOME REQUEST');
    res.send('<h1>HOME</h1>');
})
//home page

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    //destructuring req.params
    const data = redditData[subreddit];
    console.log(data);
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
    //we display data if exist else we display default notfound.ejs
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    console.log(req.params);
    res.send(`<h1>Viewing single ${postId} post on the ${subreddit} subreddit</h1>`);
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})
//cats get request

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.render('random', { num } )
})

app.post('/cats', (req, res) => {
    console.log('CAT POST REQUEST');
    res.send('<h1>THIS IS A POST CAT REQUEST, MEOW MEOW!</h1>');
})
//cats post request

app.get('/dogs', (req, res) => {
    console.log('DOG REQUEST!');
    res.send('<h1> WOOF WOOF FREEZE THIS IS A DOG REQUEST! </h1>');
})
//dogs request

app.get('/search', (req, res) => {
    const { q } = req.query; 
    if (!q) {
        res.send('<h1>Nothing found if nothing searched');
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})
//deconstruct req.query. like this we handle different queries searches
//we add if to check if search exist otherwise we return a simple alternative message


app.get('*', (req, res) => {
    res.send('<h1>WRONG PATH, YOU DONT EVEN KNOW WHAT YOU ARE DOING, DONT YOU?</h1>');
})
//general catch all response when we enter a wrong request path, this needs to be always the last one


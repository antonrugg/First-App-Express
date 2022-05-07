const express = require("express");
const app = express()

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
    console.log(req.params);
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    console.log(req.params);
    res.send(`<h1>Viewing single ${postId} post on the ${subreddit} subreddit</h1>`);
})

app.get('/cats', (req, res) => {
    console.log('CAT GET REQUEST!');
    res.send('<h1>THIS IS A CAT GET REQUEST, YOU ARE UNDER ARREST!</h1>');
})
//cats get request

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
    console.log('WRONG PATH MATE!');
    res.send('<h1>WRONG PATH, YOU DONT EVEN KNOW WHAT YOU ARE DOING, DONT YOU?</h1>');
})
//general catch all response when we enter a wrong request path, this needs to be always the last one


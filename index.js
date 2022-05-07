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

app.get('*', (req, res) => {
    console.log('WRONG PATH MATE!');
    res.send('<h1>WRONG PATH, YOU DONT EVEN KNOW WHAT YOU ARE DOING, DONT YOU?</h1>');
})


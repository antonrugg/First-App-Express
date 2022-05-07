const express = require("express");
const app = express()

app.use((req, res) => {
    console.log("PRINT THIS FOR EVERY REQUEST OF EVERY KIND!!!");
    // console.dir(req);
    res.send('<h1>Hello World</h1>');

})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!!!");
})
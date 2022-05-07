const express = require("express");
const app = express()

app.use(() => {
    console.log("PRINT THIS FOR EVERY REQUEST OF EVERY KIND!!!");
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!!!");
})
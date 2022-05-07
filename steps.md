//created package.json standard using: npm init -y
//added express: npm i express (node js framework with nice features for web dev purposes)
// added index.js(standard file for main, you can check in package.json)
// in index.js first we need to require express in order to use it
//but what is require() ? It's a built-in function in Nodejs with a special purpose: to load modules.
//but what are modules? A way to split an application into separate files. For more infos: --> https://stackoverflow.com/questions/9901082/what-is-this-javascript-require
//next we need to execute express(its like a function) and we save it into a variable
//to make a server going, we need to "start listening", for this we use the listen method (app.listen) that takes a port to listen on and we add a callback function. (3000, () =>{
    console.log("LISTENING ON PORT 3000!!!);
})
//We can already run this using "node index.js" (in git)







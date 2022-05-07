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
//We are listening but we are not responding so we add use method (every time we get a request we give a response). In use method we pass a callback function. () => {
    console.log("PRINT THIS WHEN WE GET A REQUEST OF ANY KIND!!!");
//remember to restart server for every request for now.
//every time we go to localhost:3000 we''ll print console.log   
//to respond with real content we need to pass two params (req and res), objects provided by express
//check "response" and "request" in express documentation for more.
//response object has a method called "send" that we now can use to respond something we pass in, every time we make a request (refreshing page, click enter or use postman/hoppscotch)
//Now we need to route our requests, to do this we use a method on app called get (Routes HTTP GET requests to the specified path with the specified callback functions.) app.get('/path', (req, res) => {  } )
//i have to comment out the first send request with hello world, because send can responde just once for every kind of request
//we can use the path '/' to go to our home page every time.
//at the end we can add a get request with '*' path to responde in case of wrong route paths inserted
//we are now requesting for direct paths, but usually we dont do that, so we need to define standard paths
//req has a property called params that will return an object (try using console.log(req.params)) that we can extract 
//deconstruct params.get object const { subreddit } = req.params;
//deconstruct params.get object const { subreddit, postId} = req.params to get a single post for example in a specific subreddit;
//this is an example app.get path to do this ----> '/r/:subreddit/:postId'  <---so we need to add ":" and deconstruct properly
//we can use a property on req called query ---> creates an object which contains a property for each query string the user inputs








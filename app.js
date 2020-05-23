const express = require ("express");
const ejs = require ("ejs");

const router = require("./router");
 
const port = 3000;

const myApp = express();
myApp.use(express.static("public"));
myApp.set("views", "views");
myApp.set("view engine", "ejs");

myApp.use('/', router);

myApp.listen(port, function(){
    console.log(`you are running on ${port} port`);
});
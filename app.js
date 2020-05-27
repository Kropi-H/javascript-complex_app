const express = require("express");
const ejs = require("ejs");

const router = require("./router");


const myApp = express();
myApp.use(express.static("public"));

myApp.use(express.urlencoded({ extended: false })); // This tels to express to add users submitted data. This is boilerplate!
myApp.use(express.json()); // Sending over some json data

myApp.set("views", "views");
myApp.set("view engine", "ejs");

myApp.use("/", router);

module.exports = myApp;


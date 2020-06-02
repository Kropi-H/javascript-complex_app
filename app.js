const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const ejs = require("ejs");

const router = require("./router");

const myApp = express();

let sessionOptions = session({
    secret:"JavaScritp is soo cool",
    store: new MongoStore({
        client: require('./db')
    }),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60*24,
        httpOnly:true
    }
});

myApp.use(sessionOptions);

myApp.use(express.static("public"));

myApp.use(express.urlencoded({ extended: false })); // This tels to express to add users submitted data. This is boilerplate!
myApp.use(express.json()); // Sending over some json data

myApp.set("views", "views");
myApp.set("view engine", "ejs");

myApp.use("/", router);

module.exports = myApp;


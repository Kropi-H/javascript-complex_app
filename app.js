const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");
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
myApp.use(flash());

myApp.use(function(req, res, next){
    // Make all error and flash messages available for all templates
    res.locals.errors = req.flash("errors");
    res.locals.success = req.flash("success");

    // Make current user id avaiable on the req object
    if(req.session.user){req.visitorId = req.session.user._id} else {req.visitorId = 0};

    // Make user session data available from within view templates
    res.locals.user = req.session.user;
    next();
})

myApp.use(express.static("public"));

myApp.use(express.urlencoded({ extended: false })); // This tels to express to add users submitted data. This is boilerplate!
myApp.use(express.json()); // Sending over some json data

myApp.set("views", "views");
myApp.set("view engine", "ejs");

myApp.use("/", router);

module.exports = myApp;


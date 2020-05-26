const User = require("../models/User");

exports.login = function () {};

exports.logout = function () {};

exports.register = function (req, res) {
  let user = new User(req.body); // This makes new instance of User = new object and seti it in to the variable user
  user.register();
  res.send("Thanks for trying register");
};

exports.home = function (req, res) {
  res.render("home-quest");
};
 
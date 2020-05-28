const User = require("../models/User");

exports.login = function (req, res) {
  let user = new User(req.body);
  user.login(function(result){
    res.send(result);
  });
};

exports.logout = function () {};

exports.register = function (req, res) {
  let user = new User(req.body); // This makes new instance of User = new object and seti it in to the variable user
  user.register();
  if (user.errors.length) {
    res.send(user.errors);
  } else {
    res.send("Congrats, there are no errors");
  }
};

exports.home = function (req, res) {
  res.render('home-quest');
};

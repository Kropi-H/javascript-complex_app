const User = require("../models/User");

exports.login = function (req, res) {
  let user = new User(req.body);
  user.login().then(function(result){ // If the promise is successfully
    res.send(result)
  }).catch(function(err){  // If the promise is unsuccessfully
    res.send(err)
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

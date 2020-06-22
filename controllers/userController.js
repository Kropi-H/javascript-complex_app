const User = require("../models/User");

exports.mustBeLoggedIn = function(req, res, next){
  if(req.session.user){
    next()
  }else{
  req.flash("errors", "You must be logged in to perform that action");
    req.session.save(function(){
      res.redirect('/');
    })
  }
}


exports.login = function (req, res) {
  let user = new User(req.body);
  user.login().then(function(result){ // If the promise is successfully
    req.session.user = { // What we store to the database as session
      avatar:user.avatar,
      username:user.data.username,
      _id:user.data._id
    };
    req.session.save(function(){
      res.redirect('/');
    });
  }).catch(function(err){  // If the promise is unsuccessfully
    req.flash('errors', err);
    req.session.save(function(){
      res.redirect('/');
    })
  });
};

exports.logout = function (req, res) {
  req.session.destroy(function(){
    res.redirect('/');
  });
};

exports.register = function (req, res) {
  let user = new User(req.body); // This makes new instance of User = new object and set it in to the variable user
  user.register().then(()=>{
    req.session.user = {
      usename: user.data.username,
      avatar: user.data.avatar,
      _id:user.data._id
    };
    req.session.save(function(){
      res.redirect('/')
    })
  }).catch((reqErrors)=>{
    reqErrors.forEach(function(error){
      req.flash('regErrors', error)
    })
    req.session.save(function(){
      res.redirect('/')
    })
  });
};

exports.home = function (req, res) {
  if(req.session.user){
    res.render('home-dashboard');
  }else{
    res.render('home-quest', {errors: req.flash('errors'), regErrors: req.flash('regErrors')});
  }
};

exports.ifUserExists = function(req, res, next){
    User.findByUsername(req.params.username).then(function(userDocument){
      req.profileUser = userDocument;
      next();
    }).catch(function(){
      res.render('404');
    });
}

exports.profilePostsScreen = function(req, res){
  res.render('profile-posts', {
    profileUsername: req.profileUser.username,
    profileAvatar: req.profileUser.avatar
  });
}
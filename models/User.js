let User = function (data) {  // This is our CONSTRUCTOR FUNCTION. This is our reusable blueprint that can be used to create user objec tin other words we're going
  this.data = data;
};

User.prototype.register = function () {
     
};

module.exports = User; // By this we can export our function to use it in other places we will calling from by using let User = require("./User")!

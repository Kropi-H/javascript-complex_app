const mongodb = require("mongodb");

const connectionString = 'mongodb+srv://todoAppUser:T4Kv0Buw1dZHWOtW@cluster0-culjg.mongodb.net/ComplexApp?retryWrites=true&w=majority';

mongodb.connect(connectionString,{useNewUrlParser:true, useUnifiedTopology:true},function(err, client){
    module.exports = client.db();
    const myApp = require('./app');
    myApp.listen(3000)
;});
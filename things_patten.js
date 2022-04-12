//schema file 
var mongoose=require('../config/al_regionsch');

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var commodity_pattern =mongoose.Schema({
    
    type:String,
    thingsinfo:{
         Rice:String,
         Sugar:String,
         Oil:String,
         Wheat:String
     },
   
});

module.exports = mongoose.model("PHH",commodity_pattern);

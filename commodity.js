var express=require('express')

var Router=express.Router();

var commodity_pattern=require('../model/things_patten');


var add_things=commodity_pattern({

    type:"PHH",
        thingsinfo:{
           Rice:"35kg",
           Sugar:"5kg",
           Oil:"2l",
           Wheat:"7kg"
        },
});
add_things.save();

module.exports=Router;
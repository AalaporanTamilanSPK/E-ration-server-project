var express= require ('express');
var districtdata = express.Router();
var mongoose = require ('mongoose');
const { stringify } = require('uuid');
//db conncetion
mongoose.connect("mongodb://localhost:27017/TN_onpuoc",(err)=>{

    if (!err)console.log('db created');
    else console.log('db error');

});
 module.exports=mongoose;
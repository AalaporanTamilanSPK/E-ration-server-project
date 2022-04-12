//schema file 
var mongoose=require('../config/al_regionsch');

const distinfopatten =mongoose.Schema({
    
    id:Number,
    type:String,
    familyhead:{
         name:String,
         age:Number,
         gender:String,
         income:Number,
         familymember:{
         adults:[{name:String,age:Number,gender:String,matiralstatus:Boolean},{name:String,age:Number,gender:String,matiralstatus:Boolean}],
         childrens:[{name:String,age:Number,gender:String},{name:String,age:Number,gender:String}],
         },
    },
   
});

module.exports=mongoose.model("madurai",distinfopatten);
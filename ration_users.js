var express=require('express')
var Router=express.Router();
var ration_users=require('../model/distick_patten');


var user_docs=ration_users({

    id:303,
        type:"APL",
        Headoffamily:{
             name:"maraan",
             age:"28",
             gender:"male",
             income:60000,
             familymember:{
             adults:[{name:"arun",age:"29",gender:"male",matiralstatus:1},{name:"nagakumar",age:"24",gender:"male",matiralstatus:0}],
             childrens:[{name:"ram",age:"12",gender:"male"},{name:"siva",age:"13",gender:"male"}],
             },
        },

    // id:3004,
    //   type: "PHH",
    //   HeadofFamily:{
    //       Name:"premkumar",
    //       Age: 23,
    //       Gender: "Male",
    //       Income: 10000,
    //       FamilyCout: 4
    //   },
    //   Adult:{
    //       FamilyMember:[{Name:"arun",Age:25,Gender:"Male",Marital:0},
    //     {Name:"raj",Age:27,Gender:"Male",Marital:1}]
    // },
    // Childrens:{
    //     FamilyMember:[{Name:"vijay",Age:13,Gender:"Male"},
    // {Name:"ram",Age:6,Gender:"Male"}]
    // }
})
user_docs.save();

module.exports=Router;

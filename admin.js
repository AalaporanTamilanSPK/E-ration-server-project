var express = require("express");
var app=express();

var express=require('express')
var admin=express.Router();
var jwt = require("jsonwebtoken");
// var readlineSync=require('readline-sync');
var moment=require('moment');
var cookieParser=require('cookie-parser');
var session=require('express-session');
admin.use(cookieParser());
admin.use(session({secret:"shh is a secret!",saveUninitialized:true,resave:true}));



var bodyparser=require('body-parser');
admin.use(bodyparser.json());


var  rt_info=require('../model/distick_patten')
var admin_data=require('../model/admin_patten')

var admin =express.Router();

//admin schema
admin.use('/',function(req,res,next){
  var addadmin=require('../model/admin_patten')

  if(!req.body.username||!req.body.email){
    res.status("403");
    res.send("couldn't find data");
  }
  else{
    var addadmin=addadmin({
      username:req.body.username,
      email:req.body.email 
    });
    addadmin.save();
    next();
  }
});

admin.get('/',(req,res)=>{
const user ={
  id:1,
};

jwt.sign({ user: user }, "secretkey", (err, token) => {
  res.json({
    token
  });

});

});

//post route
admin.get("/api/posts", verifyToken, (req, res) => {

    jwt.verify(req.token, "secretkey", (err, authData) => {
  
      if (err) {
  
        res.sendStatus(403);
  
      } else {

        var prompt=require('prompt-sync')({sigint:true});
        var card_type=prompt('Enter your card type');
        
        rt_info.find({type:card_type},{headoffamily:{name:1}},function(err,data){
          if (data == 0){
            res.send('err');
          }
          else{
            res.send(data);
          }
        })

      // rt_info.find({type:"PHH"},function(err,data){
      //    if(data==0){
      //   res.send('err');
      //    }

      //    else{

      //     commodity_pattern.find({type:"PHH"},function(err,data){
      //     if(data==0){
      //       res.send('err');
      //     }
      //     else{
      //       res.send(data);
        //   }
        //    })
        //  }
        // })


      }
    });  
});

// admin.post("/api/login", (req, res) => {

//     const user = {
//       id: 1,
//       username: userName,
//       email: userEmail
//     };


  
  function verifyToken(req, res, next) {

    const bearerHeader = req.headers["authorization"];
  
    if (typeof bearerHeader !== "undefined") {
  
      const bearerToken = bearerHeader.split(" ")[1];
  
      req.token = bearerToken;
  
      next();
  
    } else {
  
      res.sendStatus(403);
  
    }
  
  }
  // Router.listen(3000, () => console.log("Server started"));

  module.exports = admin;